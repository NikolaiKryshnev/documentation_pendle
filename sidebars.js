module.exports = {
  myAutogeneratedSidebar: [
    {
      type: "doc",
      id: "Home",
    },
    {
      type: "doc",
      id: "Introduction",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "FAQ",
    },
    {
      type: "category",
      label: "Protocol Mechanics",
      items: [
        { type: "doc", id: "ProtocolMechanics/Glossary" },
        {
          type: "category",
          label: "Yield Tokenization",
          items: [
            { type: "doc", id: "ProtocolMechanics/YieldTokenization/SY" },
            { type: "doc", id: "ProtocolMechanics/YieldTokenization/Minting" },
            { type: "doc", id: "ProtocolMechanics/YieldTokenization/PT" },
            { type: "doc", id: "ProtocolMechanics/YieldTokenization/YT" },
          ],
        },
        {
          type: "category",
          label: "Liquidity Engines",
          items: [
            { type: "doc", id: "ProtocolMechanics/LiquidityEngines/AMM" },
            { type: "doc", id: "ProtocolMechanics/LiquidityEngines/OrderBook" },
          ],
        },
        {
          type: "category",
          label: "Tokenomics, vePENDLE, Fees",
          items: [
            { type: "doc", id: "ProtocolMechanics/Mechanisms/Tokenomics" },
            { type: "doc", id: "ProtocolMechanics/Mechanisms/vePENDLE" },
            { type: "doc", id: "ProtocolMechanics/Mechanisms/Fees" },
            {
              type: "category",
              label: "Guides",
              items: [
                { type: "doc", id: "ProtocolMechanics/Mechanisms/Guides/Lock" },
                {
                  type: "doc",
                  id: "ProtocolMechanics/Mechanisms/Guides/ClaimRewards",
                },
                {
                  type: "doc",
                  id: "ProtocolMechanics/Mechanisms/Guides/ChannelIncentives",
                },
                {
                  type: "doc",
                  id: "ProtocolMechanics/Mechanisms/Guides/ApplyBoost",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "App Guide",
      items: [
        { type: "doc", id: "AppGuide/Earn" },
        {
          type: "category",
          label: "Pendle Trade",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Guides",
              collapsed: true,
              items: [
                { type: "doc", id: "AppGuide/Trade/Guides/UsingTrade" },
                { type: "doc", id: "AppGuide/Trade/Guides/Mint" },
                { type: "doc", id: "AppGuide/Trade/Guides/Swap" },
                { type: "doc", id: "AppGuide/Trade/Guides/LimitOrder" },
                { type: "doc", id: "AppGuide/Trade/Guides/Pool" },
                { type: "doc", id: "AppGuide/Trade/Guides/Claim" },
                { type: "doc", id: "AppGuide/Trade/Guides/Dashboard" },
              ],
            },
            { type: "doc", id: "AppGuide/Trade/Calculator" },
            { type: "doc", id: "AppGuide/Trade/Pools" },
          ],
        },
        { type: "doc", id: "AppGuide/CreatingNewPools" },
      ],
    },
    {
      type: "category",
      label: "Developers",
      items: [
        { type: "doc", id: "Developers/Overview" },
        { type: "doc", id: "Developers/DeveloperUpdates" },
        { type: "doc", id: "Developers/HighLevelArchitecture" },
        { type: "doc", id: "Developers/UncategorisedQuestions" },
        {
          type: "category",
          label: "Contracts",
          items: [
            { type: "doc", id: "Developers/Contracts/StandardizedYield" },
            { type: "doc", id: "Developers/Contracts/PendleRouter" },
            { type: "doc", id: "Developers/Contracts/vePENDLE" },
          ],
        },
        {
          type: "category",
          label: "Limit Orders",
          items: [
            { type: "doc", id: "Developers/LimitOrder/LimitOrderContract" },
            { type: "doc", id: "Developers/LimitOrder/CreateALimitOrder" },
            { type: "doc", id: "Developers/LimitOrder/CancelOrders" },
            { type: "doc", id: "Developers/LimitOrder/FillALimitOrder" },
          ],
        },
        {
          type: "category",
          label: "Oracles",
          items: [
            { type: "doc", id: "Developers/Oracles/HowToIntegratePtAndLpOracle" },
            { type: "doc", id: "Developers/Oracles/IntroductionOfLpOracle" },
            { type: "doc", id: "Developers/Oracles/IntroductionOfPtOracle" },
            { type: "doc", id: "Developers/Oracles/LPAsCollateral" },
            { type: "doc", id: "Developers/Oracles/PTAsCollateral" },
            { type: "doc", id: "Developers/Oracles/PTSanityChecks" },
          ],
        },
        {
          type: "category",
          label: "Off-chain helpers",
          items: [
            { type: "doc", id: "Developers/Backend/Backend" },
            { type: "doc", id: "Developers/Backend/HostedSDK" },
            { type: "doc", id: "Developers/Backend/RouterStatic" },
          ],
        },
        {
          type: "category",
          label: "Deployments",
          items: [
            { type: "doc", id: "Developers/Deployments/Ethereum" },
            { type: "doc", id: "Developers/Deployments/Arbitrum" },
            { type: "doc", id: "Developers/Deployments/Mantle" },
            { type: "doc", id: "Developers/Deployments/Optimism" },
            { type: "doc", id: "Developers/Deployments/BNBChain" },
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "Security",
    },
    {
      type: "link",
      label: "Whitepapers",
      href: "https://github.com/pendle-finance/pendle-v2-resources/tree/main/whitepapers",
    },
    {
      type: "link",
      label: "Learn In-App",
      href: "https://app.pendle.finance/pro/education/learn",
    },
    {
      type: "link",
      label: "Pendle Academy",
      href: "https://pendle.gitbook.io/pendle-academy",
    },
  ],
};
