import {
  CubeIcon,
  CloudIcon,
  EyeIcon,
  ServerIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";

export const UseCasesArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CubeIcon,
          description: `Powers the ability to privately move and transfer assets between blockchains.`,
          name: "Connected Shielded Pool Protocols",
        }}
        href=""
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: EyeIcon,
          description: `Create identities and connect groups between blockchains.`,
          name: "Connected Shielded Identity Protocols",
        }}
        href=""
      />
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Capable of enabling public/plaintext cross-chain use cases. Providing efficiency, and security through the use of a TSS MPC that rotates frequently.`,
          name: "General Messaging Passing & Public Bridges",
        }}
        href=""
      />
      <DetailedFeatureLink
        feature={{
          Icon: CloudIcon,
          description: `Leverage the Webb TSS DKG to sign payloads from data feeds for financial, identity, and other applications`,
          name: "Oracle Systems and Data Feeds",
        }}
        href=""
      />
    </div>
  );
};

export const ParticipateArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Tangle Network on Polkadot Apps`,
          name: "Interact with Tangle using Polkadot Apps",
        }}
        href="https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/explorer"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Through governance, you can create proposals for updating cross-chain applications.`,
          name: "Participate in Testnet Governance ",
        }}
        href="https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/democracy"
      ></DetailedFeatureLink>
    </div>
  );
};

export const TestNetworkArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Tangle Network runs independently without a relay chain.`,
          name: "Tangle Network (Testnet)",
        }}
        href="https://polkadot.js.org/apps/?rpc=wss://rpc.tangle.tools#/explorer"
      ></DetailedFeatureLink>
    </div>
  );
};
