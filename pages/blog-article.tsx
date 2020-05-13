import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <!-- bread-crumbs --> */}
            <div id="bread-crumbs-w">
                <div id="bread-crumbs">
                    <p><a href="index.html" className="home-crumbs">Home</a><span> / </span>News project</p>
                    <div className="clear"></div>
                </div>
            </div>
        {/* <!-- news-project-page --> */}
            <div id="news-project-page-w">
                <div id="news-project-page">
                    <h2>Регистрация кошелька <br className="br660"/>в Ouroboros</h2>
                    {/* <!-- --> */}
                    <div className="news-project-page-info">
                        <div className="date">21.01.2020</div>
                        <div className="views">486</div>
                        <div className="social">
                            <span>Поделиться:</span>
                            <a href="https://www.facebook.com/" target="_blank" className="facebook"></a>
                            <a href="https://www.t.me/" target="_blank" className="telegram"></a>
                            <a href="https://www.twitter.com/" target="_blank" className="twitter"></a>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* <!-- --> */}
                    <div className="clear"></div>
                    <img src="images/53.jpg" alt=""/>
                    <p className="pnpp-1">Для того, чтобы зарегистрировать кошелек Ouroboros, пройдите по адресу <a href="https://wallet.ouroboros-crypto.com" target="_blank">wallet.ouroboros-crypto.com</a></p>
                    <h4>Внимание!</h4>
                    <p className="pnpp-2"><span>1</span>Прежде чем использовать свою почту для регистрации кошелька Ouroboros, обязательно проверьте её на сайте <a href="https://Haveibeenpwned.com" target="_blank">Haveibeenpwned.com</a>, возможно, она была скомпрометирована, и злоумышленники имеют к ней доступ!</p>
                    <p className="pnpp-2"><span>2</span>Никогда не создавайте одинаковых паролей! Если у вас пароль в кошельке Ouroboros такой же, как в почтовом ящике, срочно поменяйте!</p>
                    <h4>Начнем</h4>
                    <p className="pnpp-3">В открывшемся окне кликаем на кнопку "Регистрация"</p>
                    <img src="images/54.jpg" alt=""/>
                    <p className="pnpp-1">Далее заполняем необходимые поля и нажимаем: "Регистрация"</p>
                    <img src="images/55.jpg" alt=""/>
                    <p className="pnpp-1">После этого вы перейдете на страничку вашего кошелька. Далее необходимо подключить двухфакторную аутентификацию, кликаем на вкладку: "2FA"</p>
                    <img src="images/56.jpg" alt=""/>
                    <p className="pnpp-1">В открывшейся вкладке внимательно читаем инструкцию и выполняем необходимые манипуляции.</p>
                    <p className="pnpp-3">Если у вас нет телефона или нет возможности установить на телефон приложение Google Authenticator, необходимо скачать приложение для компьютера с сайта <a href="https://Authy.com" target="_blank">Authy.com</a>. Следуя инструкции, включить двухфакторную аутентификацию и только после этого начислять средства на счет кошелька Ouroboros.</p>
                    <div className="clear"></div>
                </div>
            </div>
        {/* <!-- news-project --> */}
            <div id="news-project-w">
                <div id="news-project-w1">
                    <div id="news-project">
                        <h3>Читайте также:</h3>
                        <div className="news-project-w">
                            {/* <!-- --> */}
                            <a href="" className="news-project">
                                <img src="images/43.jpg" alt=""/>
                                <p>Открытие офисов <br/>Ouroboros</p>
                                <div className="clear"></div>
                            </a>
                            {/* <!-- --> */}
                            <a href="" className="news-project">
                                <img src="images/44.jpg" alt=""/>
                                <p>Ouroboros на форуме <br/>Блокчейн Лайф</p>
                                <div className="clear"></div>
                            </a>
                            {/* <!-- --> */}
                            <a href="" className="news-project">
                                <img src="images/45.jpg" alt=""/>
                                <p>Регистрация кошелька <br/>Ouroboros</p>
                                <div className="clear"></div>
                            </a>
                            {/* <!-- --> */}
                            <a href="" className="news-project">
                                <img src="images/46.jpg" alt=""/>
                                <p>Калькулятор доходности <br/>Ouroboros</p>
                                <div className="clear"></div>
                            </a>
                            {/* <!-- --> */}
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        {/* <!-- bottom --> */}
            <div id="bottom-w">
                <div id="bottom">
                    <a href="" className="logo">Ouroboros</a>
                    <div className="menu">
                        <a href="">About The Project</a>
                        <a href="">Road Map</a>
                        <a href="">What Makes Us Unique</a>
                        <a href="">Paramining</a>
                        <div className="clear"></div>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/" target="_blank" className="facebook"></a>
                        <a href="https://www.t.me/" target="_blank" className="telegram"></a>
                        <a href="https://www.twitter.com/" target="_blank" className="twitter"></a>
                        <a href="https://www.youtube.com/" target="_blank" className="youtube"></a>
                        <a href="" target="_blank" className="bitcoin"></a>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
    </Layout>
  );
}
