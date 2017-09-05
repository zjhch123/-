import React from 'react';
import style from './Search.scss';
import Header from '../../components/ResultHeader/Header';
import Footer from '../../components/ResultFooter/Footer';
import SearchBar from '../../components/ResultHeader/SearchBar';
import GroupList from '../../components/GroupList/GroupList';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Util from '../../util';
import {SearchAction, GroupAction} from '../../actions';
import ResultItem from '../../components/ResultItem/ResultItem';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ trickleSpeed: 100 });

const Tip = ({title}) => (
  <div className={style.cSearchTip}>
    <h1>{title}</h1>
  </div>
)

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.mapQueryCondition(props);
  }

  componentDidMount() {
    this.props.dispatchSearch(this.title, this.page, this.pageSize);
    this.props.dispatchGroups(this.title);
  }

  componentWillUpdate(nextProps) {
    this.mapQueryCondition(nextProps);
  }

  mapQueryCondition(props) {
    this.title = Util.getUrlParam(props.location.search, 'q') || '';
    this.page = Util.getUrlParam(props.location.search, 'page') || 1;
    this.pageSize = Util.getUrlParam(props.location.search, 'pageSize') || 10;
    this.searchBarInputValue = this.title;
  }

  handlerSearchBarValueChange(e) {
    this.searchBarInputValue = e.target.value;
  }

  handlerSearchBarSubmitClick() {
    if (this.title === this.searchBarInputValue) {
      return;
    }
    this.props.refreshLocation(this.searchBarInputValue, this.page, this.pageSize);
    this.props.dispatchSearch(this.searchBarInputValue, this.page, this.pageSize);
    this.props.dispatchGroups(this.searchBarInputValue);
  }

  handlerPage(nextPage) {
    window.scrollTo(0, 0);
    this.props.refreshLocation(this.searchBarInputValue, nextPage, this.pageSize);
    this.props.dispatchSearch(this.searchBarInputValue, nextPage, this.pageSize);
  }

  renderTip(title) {
    return <Tip title={title} />
  }  

  renderLoadingView() {
    NProgress.start();
    return this.renderTip("正在查询");
  }

  renderOverLoadingView() {
    return (this.props.searchResult.result === false ? this.renderSearchErrorView() 
                      : this.renderSearchSuccessView(this.props.searchResult.result));
  }

  renderSearchErrorView() {
    return this.renderTip("服务器开小差了，请重新查询 :（");
  }

  renderNoResultView() {
    return this.renderTip(`未找到和 ${this.title} 相关的结果 :（`);
  }

  renderSearchSuccessView(data) {
    NProgress.done();
    if (data.result.length === 0) {
      this.renderNoResultView();
    } else {
      window.scrollTo(0, 0);
      const totalNum = this.props.searchResult.result.total;
      const pageSize = this.props.searchResult.result.pageSize;
      const totalPage = totalNum % pageSize === 0 ? ~~(totalNum / pageSize) : ~~(totalNum / pageSize) + 1;
      return (
        <div>
          <aside className={style.gAside}>
            <GroupList data={this.props.groupResult.port || []} title="端口分布" condition="port"/>
            <GroupList data={this.props.groupResult.country || []} title="国家/地区分布" condition="countryName"/>
            <GroupList data={this.props.groupResult.org || []} title="企业分布" condition="org"/>
            <GroupList data={this.props.groupResult.tags || []} title="设备类型分布" condition="tags"/>
            <GroupList data={this.props.groupResult.isp || []} title="服务供应商分布" condition="isp"/>
          </aside>
          <div className={style.gMain}>
            <p className={style.mSearchTip}>{`搜索结果 ${this.props.searchResult.result.total} 条，耗时: ${this.props.searchResult.result.time} ms`}</p>
            {data.result.map((item, index) => <ResultItem data={item} key={index}/>)}
          </div>
          <div className={style.gBottom}>
            {this.page <= 1 ? '' : <button className={style.mButton} onClick={(e) => this.handlerPage(~~(this.page) - 1)}>上一页</button>}
            {this.page >= totalPage ? '' : <button className={style.mButton} onClick={(e) => this.handlerPage(~~(this.page) + 1)}>下一页</button>}
          </div>
        </div>
      )
    }
  }

  renderResultView() {
    if (this.props.searchResult.isLoading) {
      return this.renderLoadingView();
    } else {
      return this.renderOverLoadingView(); 
    }
  }

  render() {
    const view = this.title === '' ? this.renderNotInpuView() : this.renderResultView();
    return (
      <div className={style.cSearch}>
        <Header />
        <SearchBar 
            title={this.title}
            inputValueChange={(e) => this.handlerSearchBarValueChange(e)}
            submitClick={() => this.handlerSearchBarSubmitClick()}
            detail={this.title !== ''}/>
        <main>
          {view}
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location,
  searchResult: state.search,
  groupResult: state.group
});

const mapDispatchToProps = (dispatch) => ({
  refreshLocation: function(condition, page, pageSize) {
    dispatch(push({
      location: '/search',
      search: `q=${condition}&_=${Date.now()}&page=${page}&pageSize=${pageSize}`
    }));
  },
  dispatchSearch: function(condition, page, pageSize) {
    dispatch(SearchAction(condition, page, pageSize));
  },
  dispatchGroup: function(condition, by, limit, order, pageSize) {
    dispatch(GroupAction({condition, by, limit, order}));
  },
  dispatchGroups: function(condition) {
    this.dispatchGroup(condition, 'port', 5, -1, 10);
    this.dispatchGroup(condition, 'tags', 5, -1, 10);
    this.dispatchGroup(condition, 'org', 5, -1, 10);
    this.dispatchGroup(condition, 'country', 7, -1, 10);
    this.dispatchGroup(condition, 'isp', 5, -1, 10);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);




