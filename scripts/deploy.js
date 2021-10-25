const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Grobo", "Boomba", "Samoo"],       // Names
      ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flacrafta.com%2Fwp-content%2Fuploads%2F2020%2F05%2FGorilla-mask-2.jpg&f=1&nofb=1", // Images
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XPJJuRF5QEjpGF7e939-SgHaE8%26pid%3DApi&f=1", 
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flacrafta.com%2Fwp-content%2Fuploads%2F2020%2F06%2FGorilla-mask-polygonal-7.jpg&f=1&nofb=1"],
      [100, 200, 300],                    // HP values
      [50, 25, 12]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);




    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");
  
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");
  
    txn = await gameContract.mintCharacterNFT(3);
    await txn.wait();
    console.log("Minted NFT #4");
  
    console.log("Done deploying and minting!");


  };



  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();