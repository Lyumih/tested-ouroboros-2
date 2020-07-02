import "./subscribe-box.module.scss";
import {FormEvent, useState} from "react";

export default function SubscribeBox() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  function handleSubscribe(e:FormEvent) {
    e.preventDefault()
    if (email.includes("@") && email.includes(".")) {

      fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({email})
      })
        .then(response => response.json())
        .then(data=>setMessage(data.message ? data.message : "Done"))
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
            <div className="subscribe-done">{message}</div>
          </form>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
