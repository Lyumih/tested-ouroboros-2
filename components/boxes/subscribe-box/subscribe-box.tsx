import "./subscribe-box.module.scss";
import {FormEvent, useState} from "react";

export default function SubscribeBox() {
  const [email, setEmail] = useState("")
  function handleSubscribe(e:FormEvent) {
    e.preventDefault()
    if (email) {
      alert(`Вы успешно подписаны!` )
    }
  }
  return (
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
          <form onSubmit={handleSubscribe} method="POST" name="form" id="form">
            <input
              type="email"
              size={50}
              name="email"
              className="email"
              // autoComplete="off"
              placeholder="Your E-mail"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
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
  );
}
