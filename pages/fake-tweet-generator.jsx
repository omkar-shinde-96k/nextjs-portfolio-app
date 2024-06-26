import Image from "next/image";
import React, { useState, useEffect } from "react";
import style from "../styles/tweet-to-image.module.scss";
import TwitterLogo from "../assets/TwitterLogo.png";
import html2canvas from "html2canvas";
import { FcLike } from "react-icons/fc";
import { FiRepeat } from "react-icons/fi";
import Head from "next/head";

const backgroundColorOptions = [
  {
    backgroundColor:
      "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,252,1) 100%)",
  },
  {
    backgroundColor:
      "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,252,1) 100%)",
  },
  {
    backgroundColor:
      "linear-gradient(90deg, rgba(54, 22, 162, 0.7357317927170868) 0%, rgba(196, 29, 253, 0.7161239495798319) 70%)",
  },
  {
    backgroundColor:
      "linear-gradient(90deg, rgba(54,22,162,0.7357317927170868) 0%, rgba(29,253,249,0.7161239495798319) 74%)",
  },
  {
    backgroundColor:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  },
  {
    backgroundColor:
      "linear-gradient(90deg, rgba(204,251,63,1) 0%, rgba(70,252,245,0.6404936974789917) 71%)",
  },
];

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num <= 999) {
    return num; // if value < 1000, nothing to do
  }
}

const FakeTweetGenerator = () => {
  const [tweetData, setTweetData] = useState({
    name: "Elon Musk",
    username: "elonmusk",
    profilePic:
      "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
    text: "If I fhad a dollar for every time someone asked me if Trump is coming back on this platform, Twitter would be minting money!",
    likes: "992343",
    reTweets: "343432",
    timeStamp: "Mon Oct 31 17:10:05 2022",
  });
  const [error, setError] = useState(null);
  const [showLikes, setShowLikes] = useState(true);
  const [showTimeDate, setShowTimeDate] = useState(true);
  const [tweetSize, setTweetSize] = useState(1);
  const [tweetWidth, setTweetWidth] = useState(80);
  const [editorBackgroud, setEditorBackgroud] = useState(
    backgroundColorOptions[0].backgroundColor
  );
  const [tweetShadow, setTweetShadow] = useState(25);
  const [tweetFont, setTweetFont] = useState(20);

  console.log("tweetData", tweetData);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setTweetWidth(95);
      setTweetSize(0.9);
    }
  }, []);

  const featchTweet = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id || "1587129795732770824",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const result = await fetch(
      `${window.location.origin}/api/hello`,
      requestOptions
    );
    const data = await result.json();
    setTweetData({
      name: data.user.name,
      username: data.user.screen_name,
      profilePic: data?.user?.profile_image_url_https,
      text: data.text,
      likes: data.favorite_count,
      reTweets: data.retweet_count,
      timeStamp: data?.created_at,
    });
  };

  useEffect(() => {
    // featchTweet()
  }, []);

  function download() {
    html2canvas(document.getElementById("tweetWrapper")).then(function (
      canvas
    ) {
      var anchorTag = document.createElement("a");
      document.body.appendChild(anchorTag);
      anchorTag.download = "tweet.jpg";
      anchorTag.href = canvas.toDataURL();
      anchorTag.target = "_blank";
      anchorTag.click();
    });
  }

  const onInputChange = (e) => {
    setError(null);
    let link = e.target.value;
    if (!link.trim()) return;
    let a = link.split("/");
    let b = a[a.length - 1];
    if (b?.length === 19) {
      featchTweet(b);
      return;
    }
    setError("Invalid Tweet Link");
  };

  const tweetSizeRangeHandler = (e) => {
    setTweetSize(e.target.value);
  };

  const tweetWidthRangeHandler = (e) => {
    setTweetWidth(e.target.value);
  };

  const imageUploadHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setTweetData({
        ...tweetData,
        profilePic: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <>
      <Head>
        <title>Tweet to Image Converter</title>
        <meta
          name="keywords"
          content="tweet to image, tweet to image online, tweet to image app, tweet to image generator, tweet to image without watermark, tweet to image free, convert tweets to image, tweet 2 image, how to take picture of a tweet, fake tweet photo editor"
        />
        <meta
          name="description"
          content="Online Tweet to Image Converter is a free tool for converting tweets into images and get tweet screenshots. You can add customized backgrounds such as gradients, solid colors or images and generate images from tweets. You can use light or dark theme. Also, language can be set before capturing tweets."
        />
      </Head>
      <div class={style.main}>
        <div class={style.pagebody}>
          <div class={style.container}>
            <section>
              <div class={style.box}>
                <h1>Fake tweet generator</h1>
                <p className={style.paraFontSize}>
                  Fake tweet generator is a web app that can generate realistic
                  looking tweets in seconds
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className={style.container}>
          <div className={style.editor}>
            <div
              id="tweetWrapper"
              className={style.tweetWrapper}
              style={{ background: editorBackgroud }}
            >
              <div
                className={style.tweet}
                style={{
                  transform: `scale(${tweetSize})`,
                  width: `${tweetWidth}%`,
                }}
              >
                {/* <div className={style.tweet} style={{ transform: `scale(${tweetSize})`, width: `${tweetWidth}%`, boxShadow: `3px 3px ${tweetShadow}px gray` }}> */}
                <div className={style.tweetUserInfo}>
                  <div className={style.profilePicWrapper}>
                    <div className={style.profilePic}>
                      <Image
                        src={tweetData.profilePic}
                        alt="autor profile picture"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className={style.userInfo}>
                      <h3>{tweetData.name}</h3>
                      <p>@{tweetData.username}</p>
                    </div>
                  </div>
                  <div className={style.twitterIcon}>
                    <Image
                      src={TwitterLogo}
                      alt="twitter logo"
                      width="30"
                      height="30"
                    />
                  </div>
                </div>
                <div
                  className={style.tweetText}
                  style={{ fontSize: `${tweetFont}px` }}
                >
                  {tweetData?.text}
                </div>

                {showTimeDate && (
                  <p
                    className={style.tweetTime}
                    style={{ fontSize: `${tweetFont - 8}px` }}
                  >
                    {tweetData?.timeStamp}
                  </p>
                )}

                {showLikes && (
                  <div className={style.tweetLikesRetweets}>
                    <span>
                      <FcLike size="20" /> &nbsp;&nbsp;{" "}
                      {numFormatter(tweetData?.likes)}
                    </span>
                    <span>
                      <FiRepeat size="20" color="green" /> &nbsp;&nbsp;{" "}
                      {numFormatter(tweetData?.reTweets)}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className={style.tools}>
              <button
                onClick={download}
                className={`${style.saveButton} ${style.downloadBtn}`}
              >
                Download Image
              </button>

              <div className={style.backgroundOptions}>
                <p className={style.paraFontSize}>Background:</p>
                <div className={style.backgroundOptionsList}>
                  {backgroundColorOptions.map((item) => {
                    return (
                      <span
                        key={item?.backgroundColor}
                        style={{ background: item.backgroundColor }}
                        onClick={() => setEditorBackgroud(item.backgroundColor)}
                      >
                        {" "}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className={style.BackgroudPicker}>
                <span className={style.paraFontSize}>Costom background: </span>
                <input
                  type="color"
                  value={editorBackgroud}
                  onChange={(e) => setEditorBackgroud(e.target.value)}
                />
              </div>

              <div className={style.showLikes}>
                <input
                  value={!showLikes}
                  checked={showLikes}
                  onClick={() => setShowLikes(!showLikes)}
                  className={style.likesCheck}
                  type="checkbox"
                />
                <div className={style.likesInfo}>
                  <div className={style.paraFontSize}>
                    Show like and retweet count
                  </div>
                </div>
              </div>
              <div className={style.showLikes}>
                <input
                  value={!showTimeDate}
                  checked={showTimeDate}
                  onClick={() => setShowTimeDate(!showTimeDate)}
                  className={style.likesCheck}
                  type="checkbox"
                />
                <div className={style.likesInfo}>
                  <div className={style.paraFontSize}>
                    Show date and time of tweet
                  </div>
                </div>
              </div>

              <div className={style.tweetSize}>
                <span className={style.paraFontSize}>Tweet Size: </span>
                <input
                  type="range"
                  id="vol"
                  value={tweetSize}
                  step="0.1"
                  onChange={tweetSizeRangeHandler}
                  className={style.tweetSizeRange}
                  name="vol"
                  min="0.5"
                  max="1.3"
                />
              </div>

              <div className={style.tweetSize}>
                <span className={style.paraFontSize}>Tweet width: </span>
                <input
                  type="range"
                  id="vol"
                  value={tweetWidth}
                  step="10"
                  onChange={tweetWidthRangeHandler}
                  className={style.tweetSizeRange}
                  name="vol"
                  min="50"
                  max="100"
                />
              </div>

              <div className={style.tweetSize}>
                <span className={style.paraFontSize}>Shadow: </span>
                <input
                  type="range"
                  id="vol"
                  value={tweetShadow}
                  step="1"
                  onChange={(e) => setTweetShadow(e.target.value)}
                  className={style.tweetSizeRange}
                  name="shadow"
                  min="5"
                  max="75"
                />
              </div>

              <div className={style.tweetSize}>
                <span className={style.paraFontSize}> Font Size: </span>
                <input
                  type="range"
                  id="vol"
                  value={tweetFont}
                  step="0.5"
                  onChange={(e) => setTweetFont(e.target.value)}
                  className={style.tweetSizeRange}
                  name="tweet font"
                  min="10"
                  max="25"
                />
              </div>

              <div className={style.editTweetText}>
                <span className={style.paraFontSize}>Edit tweet:</span>
                <textarea
                  value={tweetData.text}
                  onChange={(e) =>
                    setTweetData({ ...tweetData, text: e.target.value })
                  }
                  rows="4"
                  cols="50"
                />
              </div>

              <div className={style.editAutorInfo}>
                <div
                  className={`${style.usernameWrapper} ${style.EditNameWrap}`}
                >
                  <span className={style.paraFontSize}>Name:</span>
                  <input
                    type="text"
                    value={tweetData.name}
                    onChange={(e) =>
                      setTweetData({ ...tweetData, name: e.target.value })
                    }
                  />
                </div>
                <div className={style.usernameWrapper}>
                  <span className={style.paraFontSize}>Username:</span>
                  <input
                    type="text"
                    value={tweetData.username}
                    onChange={(e) =>
                      setTweetData({ ...tweetData, username: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className={style.editAutorInfo}>
                <div
                  className={`${style.usernameWrapper} ${style.EditNameWrap}`}
                >
                  <span className={style.paraFontSize}>Likes count:</span>
                  <input
                    type="number"
                    value={tweetData.likes}
                    onChange={(e) =>
                      setTweetData({ ...tweetData, likes: e.target.value })
                    }
                  />
                </div>
                <div className={style.usernameWrapper}>
                  <span className={style.paraFontSize}>Re-tweet count:</span>
                  <input
                    type="number"
                    value={tweetData.reTweets}
                    onChange={(e) =>
                      setTweetData({ ...tweetData, reTweets: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className={style.ImageUpload}>
                <span className={style.paraFontSize}>
                  Edit profile picture:
                </span>
                <input onChange={imageUploadHandler} type="file" />
              </div>

              <button onClick={download} className={style.saveButton}>
                Download Image
              </button>
            </div>
          </div>
        </div>

        <footer className={style.footer}>
          <div class={style.container}>
            <div class={style.wrapper}>
              <p className={style.paraFontSize}>
                Design and developed by{" "}
                <a
                  target="_blank"
                  href="http://www.omkarshinde.com"
                  rel="noreferrer"
                >
                  omkar shinde
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FakeTweetGenerator;
