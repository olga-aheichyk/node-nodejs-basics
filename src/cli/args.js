const parseArgs = () => {
    //console.log(process.argv);
    const args = process.argv.slice(2);

    let result = [];

    for (let i = 0; i < args.length; i += 2) {
      const propName = args[i].replace("--", "");
      const value = args[i + 1];
      result.push(`${propName} is ${value}`);
    }

    console.log(result.join(", "));
};

parseArgs();