import { useEffect } from "react";

const ADS_DEF = {
  "site-leaderboard": {
    adUnitPath: "/95386604/infatuation_leaderboard",
    id: "site-leaderboard",
    size: [[728, 90]],
    targeting: { trackid: "site-leaderboard" },
  },
  "below-post": {
    adUnitPath: "/95386604/infatuation_below_post",
    id: "below-post",
    size: [[300, 250]],
    targeting: { trackid: "below-post" },
  },
  "right-rail": {
    adUnitPath: "/95386604/infatuation_medium_sidebar",
    id: "right-rail",
    size: [[300, 250]],
    targeting: { trackid: "right-rail" },
  },
  "in-content-0": {
    adUnitPath: "/95386604/infatuation_in_content",
    id: "in-content-0",
    size: [[300, 250]],
    targeting: { trackid: "in-content-0" },
  },
  "in-content-1": {
    adUnitPath: "/95386604/infatuation_in_content",
    id: "in-content-1",
    size: [[300, 250]],
    targeting: { trackid: "in-content-1" },
  },
};

const didnaInit = new Promise((resolve, reject) => {
  let timer;
  let countRetry = 0;

  function check() {
    if (!window.didna) {
      countRetry++;
      timer = setTimeout(() => {
        check();
      }, 50);
      return;
    }
    clearTimeout(timer);
    resolve(window.didna);
  }

  check();
});

const destroyAllAds = () => {
  didnaInit.then((didna) => {
    console.log(window.didna);
    window.didna.cmd.push(() => {
      window.didna.removeAdUnits([
        "site-leaderboard",
        "below-post",
        "right-rail",
        "in-content-0",
        "in-content-1",
      ]);
    });
  });
};

const createAds = (adList) => {
  const commands = [];
  adList.forEach((id) => {
    commands.push(ADS_DEF[id]);
  });

  console.log(commands);

  didnaInit.then((didna) => {
    window.didna.cmd.push(() => {
      window.didna.createAdUnits(commands);
    });
  });
};

const AdProvider = ({ adList, children }) => {
  useEffect(() => {
    destroyAllAds();
    createAds(adList);
  }, [adList]);

  return <>{children}</>;
};

export default AdProvider;