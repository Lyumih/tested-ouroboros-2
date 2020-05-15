import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Box1 from '../components/boxes/box1/box1'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box1 />
      
      {/* <!-- box-2 --> */}
      <div id="box-2-w">
        <div id="box-2">
          <h2>
            What Makes <br />
            Us <span>Unique</span>
          </h2>
          <p className="p2-1">
            <span>Safety</span>
            <br />
            We are always focused on the security <br />
            of every part of our ecosystem.
          </p>
          <p className="p2-2">
            <span>Optimal Economic Model</span>
            <br />
            Calculations of interest rates and odds support the coin rate stable
            high
          </p>
          <p className="p2-3">
            <span>Stable Growth</span>
            <br />
            Every year the system will credit new coins to the genesis wallet
            based on the growth of the population in the world
          </p>
          <p className="p2-4">
            <span>Democracy</span>
            <br />
            The blockchain system is built on <br />a voting concept to resolve
            controversial <br />
            issues in the community
          </p>
          <p className="p2-5">
            <span>
              Various Opportunities <br />
              For Earnings
            </span>
            <br />
            You can sell your wallet to another <br />
            user thereby monetizing your structure
          </p>
          <div className="clear"></div>
        </div>
        {/* <!-- box-3 --> */}
        {/* <div id="box-3-w">
          <div id="box-3">
            <h2>
              Download <span>My Wallet</span>
            </h2>
            <p>
              Secure DeepOnion wallet is available for Windows, Mac, <br />
              and Linux. The mobile wallet is available in the Google Play
              Store. <br />
              Also Available for Tails, Debian, and Ubuntu versions.
            </p>
            <a href="" className="button-3">
              WEB client
            </a>
            <a href="" className="appstore"></a>
            <a href="" className="googleplay"></a>
            <div className="clear"></div>
          </div>
        </div> */}
        {/* <!-- --> */}
        <div className="clear"></div>
      </div>
      {/* <!-- box-4 --> */}
      <div id="box-4-w">
        <div id="box-4">
          <h2>
            Learn more about <span>Ouroboros</span>
          </h2>
          <div className="lightGallery">
            <div data-src="https://youtu.be/vN7l7JisbSk" className="videobox">
              <img src="images/19.jpg" alt="" />
              <div className="play-w">
                <div className="play"></div>
                <div className="pulse-1"></div>
                <div className="pulse-2"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      {/* <!-- box-5 --> */}
      <div id="box-5-w">
        <div id="box-5">
          <h2>
            Own <span>Ouroboros</span> Cryptocurrency
          </h2>
          <a href="" target="_blank" className="a5-1">
            <img src="images/24.png" alt="" />
          </a>
          <a href="" target="_blank" className="a5-2">
            <img src="images/25.png" alt="" />
          </a>
          <a href="" target="_blank" className="a5-3">
            <img src="images/26.png" alt="" />
          </a>
          <div className="clear"></div>
        </div>
      </div>
      {/* <!-- box-6 --> */}
      <div id="box-6-w">
        <div id="box-6">
          <h2>
            Latest project <span>news</span>
          </h2>
          <div className="box-6-w">
            <a href="" className="box-6">
              <img src="images/29.jpg" alt="" />
              <p>Открытие офисов Ouroboros</p>
              <div className="clear"></div>
            </a>
            <a href="" className="box-6">
              <img src="images/30.jpg" alt="" />
              <p>OUROBOROS на форуме Блокчейн Лайф</p>
              <div className="clear"></div>
            </a>
            <a href="" className="box-6">
              <img src="images/31.jpg" alt="" />
              <p>Регистрация кошелька Ouroboros</p>
              <div className="clear"></div>
            </a>
            <a href="" className="box-6">
              <img src="images/32.jpg" alt="" />
              <p>Калькулятор доходности Ouroboros</p>
              <div className="clear"></div>
            </a>
            <div className="clear"></div>
          </div>
          <div className="clear"></div>
          <a href="" className="button-6">
            More news
          </a>
          <div className="clear"></div>
        </div>
        {/* <!-- box-7 --> */}
        <div id="box-7-w">
          <div id="box-7">
            <h2>
              Get <span>Bi-Weekly Updates</span> from Ouroboros
            </h2>
            <p>
              Want to stay up to date with what we’re working on? Get the inside{" "}
              <br />
              scoop on what Ouroboros is up to — long before the public.
            </p>
            <div className="formbox">
              <form action="send.php" method="POST" name="form" id="form">
                <input type="email" size={50} name="email" className="email" autoComplete="off" placeholder="Your E-mail" />
                <div className="submit">
                  Subscribe
                  <input type="submit" name="submit" value="Subscribe" />
                </div>
                <div className="clear"></div>
              </form>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      
        {/* <!-- --> */}
      </div>
    </Layout>
  );
}
