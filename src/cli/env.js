const parseEnv = () => {
    //console.log(process.env);
    const rssEnvVariables = Object.keys(process.env)
      .filter((key) => key.startsWith("RSS_"))
      .map((key) => `${key}=${process.env[key]}`);

    console.log(rssEnvVariables.join("; "));
};

parseEnv();