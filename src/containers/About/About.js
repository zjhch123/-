import React from 'react';
import style from './About.scss';
import Header from '../../components/IndexHeader/Header';
import Footer from '../../components/ResultFooter/Footer';

export default class About extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      (
        <div className={style.cAbout}>
          <Header />
          <div className={style.mLogo}>
            <img alt="img" className={style.uLogo} src={require("../../resource/image/logo_banner.png")}/>
            <div>
              <span>关于我们</span>
              <span>工控设备在线搜索与可视化平台</span>
            </div>
          </div>
          <main className={style.mMain}>
            <section className={style.mIntro}>
              <p className={style.uTitle}><span className={style.fMainColor}>鉴势</span>是专精于工控设备的搜索工具</p>
              <p>明<span className={style.fMainColor}>鉴</span>&nbsp;&nbsp;洞悉风险</p>
              <p>态<span className={style.fMainColor}>势</span>&nbsp;&nbsp;预警分析</p>
            </section>
            <section className={style.mPartner}>
              <p className={style.uTitle}><span className={style.fMainColor}>鉴势</span>的合作伙伴</p>
              <div>
                <ul>
                  <li>
                    <img alt="img" src={require("../../resource/image/shodanLogo.png")}/>
                    <span><a href="https://www.shodan.io/" target="_blank" rel="noopener noreferrer">撒旦搜索</a></span>
                  </li>
                </ul>
              </div>
            </section>
            <section className={style.mPic}>
              <p className={style.uTitle}><span className={style.fMainColor}>鉴势</span>的制作团队</p>
              <div>
                <ul>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/zzh.jpg")}/>
                    <span>Hungrated</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/zjh.jpg")}/>
                    <span>Plus</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/zzy.png")}/>
                    <span>Mo</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/ypf.jpg")}/>
                    <span>YapFei</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/xjy.jpg")}/>
                    <span>Joe</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/ysq.jpg")}/>
                    <span>Seven</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/zh.jpg")}/>
                    <span>Master</span>
                  </li>
                  <li>
                    <img alt="img" className={style.uMember} src={require("../../resource/image/group/zax.jpg")}/>
                    <span>Keynes</span>
                  </li>
                </ul>
              </div>
            </section>
            <section className={style.mConnect}>
              <p className={style.uTitle}><span className={style.fMainColor}>寻求合作？</span>请联系我们</p>
              <div className={style.uEmail}>
                <a href="mail:zjhch123@gmail.com">zjhch123@gmail.com</a>
              </div>
            </section>
          </main>
          <Footer />
        </div>
        )
    )
  }
} 