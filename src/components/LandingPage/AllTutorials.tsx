import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TutorialCard, { CardItem, docType } from "./TutorialCard";
import styles from "./styles.module.scss";
import moduleStyles from "./TutorialCard.module.scss";

/* Define the cards here */
const FeaturedList: CardItem[] = [
  {
    title: "Deploy a Helm Chart using Harness GitOps for Argo CD",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: <>Get started with Harness GitOps for Argo CD.</>,
    newDoc: true,
    type: [docType.Documentation],
    time: "8min",
    link: "/tutorials/deploy-services/helm-argocd-gitops-k8s",
  },
  {
    title: "Get started with the fastest CI on the planet",

    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This tutorial helps you get started with Harness CI and explore some of
        the features that make it four times faster than the leading competitor.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "5 min",
    link: "/tutorials/build-code/fastest-ci",
  },
  {
    title: "Onboard with Terraform",
    module: "platform",
    icon: "img/logo.svg",
    description: (
      <>
        Automate lifecycle management of orgs, projects, services, environments,
        connectors and pipelines using the Harness Terraform Provider.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "5 min",
    link: "/tutorials/platform/onboard-terraform-provider",
  },
  {
    title: "Sign application containers",

    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This build automation guide describes how to sign a container image
        using a CI pipeline.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-tutorial-container-signing",
  },
];

const CIList: CardItem[] = [
  {
    title: "Node and Docker Pipeline",
    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This build automation guide walks you through building a NodeJS and
        Docker Application in a CI Pipeline.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-node-docker-quickstart",
  },
  {
    title: "Run LocalStack as a Service",
    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This build automation guide shows how to run LocalStack as a Background
        step in a CI Pipeline
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-localstack-background-step",
  },
  {
    title: "Build and Push a Container Image to Amazon ECR",
    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This guide shows how to build, test, and publish a container image to
        AWS ECR
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-build-push-to-ecr",
  },
  {
    title: "Run Sauce Connect Proxy as a Service",
    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This build automation guide walks you through running Sauce Connect
        Proxy as a Background step in a CI Pipeline
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-saucelabs-background-step",
  },
  {
    title: "Build and publish a Java HTTP Server",
    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        Build, test, and publish a Docker image for a Java HTTP server
        application
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "20 min",
    link: "/tutorials/build-code/ci-java-http-server",
  },
  {
    title: "Get started with the fastest CI on the planet",

    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This tutorial helps you get started with Harness CI and explore some of
        the features that make it four times faster than the leading competitor.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "5 min",
    link: "/tutorials/build-code/fastest-ci",
  },
  {
    title: "Build Go application containers",

    module: "ci",
    icon: "img/logo.svg",
    description: (
      <>
        This build automation guide describes building a Go container image in a
        CI Pipeline.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-tutorial-go-containers",
  },
  {
    title: "Sign Application Containers",
    module: "ci",
    icon: "img/logo.svg",
    description: (
      <>
        This build automation guide describes how to sign a container image
        using a CI pipeline.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "15 min",
    link: "/tutorials/build-code/ci-tutorial-container-signing",
  },
  {
    title: "Github Action steps",
    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        This guide shows how to run GitHub Actions natively with harness CI.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "10 min",
    link: "/tutorials/build-code/ci-github-action-step",
  },
  {
    title: "Build, test, and publish a Docker image for a sample React application",

    module: "ci",
    icon: "img/icon_ci.svg",
    description: (
      <>
        Learn how to build and test a sample React application in a CI pipeline.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "20 min",
    link: "/tutorials/build-code/ci-react-quickstart",
  },
  {
    title: 'Push application containers to Google Artifact Registry',

    module: 'ci',
    icon: "img/icon_ci.svg",
    description: (
      <>
        This build automation guide describes how to build and push an application container image to Google Artifact Registry using a CI pipeline.

      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: '15 min',
    link: '/tutorials/build-code/ci-tutorial-push-to-gar',
  },
];

const CDList: CardItem[] = [
  {
    title: "Deploy a Kubernetes Manifest",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: (
      <>
        Deploying your first set of Kubernetes Services in a CD Pipline with
        Kubernetes Manifests.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    //type: [docType.Documentation, docType.Interactive, docType.Video],
    time: "10 min",
    link: "/tutorials/deploy-services/microservice-manifest-k8s",
  },
  {
    title: "Deploy a Helm Chart",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: (
      <>
        Deploying your first set of Kubernetes Resources in a CD Pipeline with
        Helm, a popular Kubernetes Package Manager.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/deploy-services/helm-k8s",
  },
  {
    title: "Deploy a Helm Chart using Harness GitOps for Argo CD",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: (
      <>Learn about GitOps and how to leverage your own GitOps Pipeline.</>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/deploy-services/helm-argocd-gitops-k8s",
  },
  {
    title: "Build and Deploy a NodeJS App to Kubernetes",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: (
      <>Build and deploy a simple nodejs application using Harness CI and CD.</>
    ),
    newDoc: false,
    type: [docType.Documentation],
    //type: [docType.Documentation, docType.Interactive, docType.Video],
    time: "10 min",
    link: "/tutorials/deploy-services/harness-cicd-tutorial",
  },
  {
    title: "Deploy a Helm Chart using CD Community Edition",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: (
      <>
        Use the 100% free, source-available, self-managed Harness CD Community
        Edition to automate Helm Chart deployments.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/deploy-services/helm-argocd-gitops-k8s",
  },
  {
    title: "Deploy a Docker Image to Amazon ECS ",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: <>Deploy a Docker image to Amazon ECS using a CD Pipeline.</>,
    newDoc: false,
    type: [docType.Documentation],
    time: "15min",
    link: "/tutorials/deploy-services/docker-ecs",
  },
  {
    title: "Deploy a Private Image in Amazon ECR to Kubernetes ",
    module: "cd",
    icon: "img/icon_cd.svg",
    description: (
      <>
        Deploy a Docker image from a private Amazon ECR Repository to
        Kubernetes.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "15min",
    link: "/tutorials/deploy-services/docker-ecr-k8s",
  },
];

const FFList: CardItem[] = [
  {
    title: "TypeScript and React Feature Flags",
    module: "ff",
    icon: "img/icon_ff.svg",
    description: (
      <>
        Walks you through adding JavaScript Feature Flags to a TypeScript and
        React Application.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/manage-feature-flags/typescript-react-first-feature-flag",
  },
];

const CCMList: CardItem[] = [
  {
    title: "Optimizing Kubernetes Cloud Costs 101",
    module: "ccm",
    icon: "img/icon_ccm.svg",
    description: (
      <>
        This guide will walk through how start to optimize your Kubernetes Costs
        on a public cloud provider.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/manage-cloud-costs/ccm-first-kubernetes-tutorial",
  },
];

const SRMList: CardItem[] = [
  {
    title: "Introduction to SLO Management with Prometheus",
    module: "srm",
    icon: "img/icon_srm.svg",
    description: (
      <>
        Introducing SLOs and how to measure and manage your SLOs leveraging
        Prometheus.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "15min",
    link: "/tutorials/manage-service-reliability/intro-to-srm",
  },
  {
    title: "Introduction to Java Exception Management",
    module: "srm",
    icon: "img/icon_srm.svg",
    description: (
      <>
        Finding and fixing caught, uncaught, and swallowed Java exceptions.
        Learn the process and find the right tooling.
      </>
    ),
    newDoc: false,
    type: [docType.Interactive, docType.Video],
    time: "10min",
    link: "/tutorials/manage-service-reliability/intro-java-exception-management",
  },
];

const STOList: CardItem[] = [
  {
    title: "Scan a NodeJS Application",
    module: "sto",
    icon: "img/icon_sto.svg",
    description: (
      <>Scanning a NodeJS Application and prioritizing scan results.</>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/orchestrate-security-tests/nodejs-firstscan",
  },
];

const CEList: CardItem[] = [
  {
    title: "Your First Chaos Experiment on Kubernetes",
    module: "ce",
    icon: "img/icon_ce.svg",
    description: (
      <>Running a Chaos Experiment on Kubernetes for the first time.</>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/run-chaos-experiments/first-chaos-engineering",
  },
  {
    title: "Chaos Experiment from a Blank Canvas",
    module: "ce",
    icon: "img/icon_ce.svg",
    description: (
      <>Create, run, observe and evaluate a custom chaos experiment.</>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "5min",
    link: "/tutorials/run-chaos-experiments/chaos-experiment-from-blank-canvas",
  },
  {
    title: "Integration with Harness CD",
    module: "ce",
    icon: "img/icon_ce.svg",
    description: (
      <>
        Execute a chaos experiment as part of a Harness CD pipeline for
        continuous resilience.
      </>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "15min",
    link: "/tutorials/run-chaos-experiments/integration-with-harness-cd",
  },
  {
    title: "Your first chaos experiment execution using APIs",
    module: "ce",
    icon: "img/icon_ce.svg",
    description: (
      <>Executing a chaos experiment on Kubernetes for the first time using APIs.</>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "10min",
    link: "/tutorials/run-chaos-experiments/first-chaos-experiment-via-API",
  },
];

const PlatformList: CardItem[] = [
  {
    title: "Install Delegate",
    module: "platform",
    icon: "img/logo.svg",
    description: (
      <>Install a Docker or Kubernetes Delegate on your infrastructure.</>
    ),
    newDoc: false,
    type: [docType.Documentation],
    time: "5 min",
    link: "/tutorials/platform/install-delegate",
  },
  {
    title: "Onboard with Terraform",
    module: "platform",
    icon: "img/logo.svg",
    description: (
      <>
        Automate lifecycle management of orgs, projects, services, environments,
        connectors and pipelines using the Harness Terraform Provider.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "5 min",
    link: "/tutorials/platform/onboard-terraform-provider",
  },
  {
    title: "Provision Azure Infrastructure for Harness Delegate",
    module: "platform",
    icon: "img/logo.svg",
    description: (
      <>
        Tutorial on how to set up a Kubernetes cluster on Azure and will serve
        as the foundation for your CI/CD pipeline infrastructure.
      </>
    ),
    newDoc: true,
    type: [docType.Documentation],
    time: "3 min",
    link: "/tutorials/platform/provision-azure-infrastructure",
  },
];

export default function AllTutorials() {
  const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  return (
    // <Layout title="All Tutorials" description="All Tutorials">
    //   <ul className={styles.breadCrumb}>
    //     <li>Get Started</li>
    //     <li>All Tutorials</li>
    //   </ul>
    <div className={clsx("container", moduleStyles.allTutorials)}>
      <div className={styles.topSection}>
        <h1>All Tutorials</h1>
        <p>
          Learn intelligent software delivery skills with step-by-step
          tutorials, interactive labs, videos and reference docs.
        </p>
      </div>
      <div className={styles.subSection}>
        <h3>Featured Tutorials</h3>
        <TutorialCard FeatureList={FeaturedList} featuredCard={true} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_ci.svg`} />
          <h3>Build & Test Code</h3>
        </div>
        <TutorialCard FeatureList={CIList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_cd.svg`} />
          <h3>Deploy Services</h3>
        </div>
        <TutorialCard FeatureList={CDList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_ff.svg`} />
          <h3>Manage Feature Flags</h3>
        </div>
        <TutorialCard FeatureList={FFList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_ccm.svg`} />
          <h3>Optimize Cloud Costs</h3>
        </div>
        <TutorialCard FeatureList={CCMList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_srm.svg`} />
          <h3>Manage Service Reliability</h3>
        </div>
        <TutorialCard FeatureList={SRMList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_sto.svg`} />
          <h3>Orchestrate Security Tests</h3>
        </div>
        <TutorialCard FeatureList={STOList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/icon_ce.svg`} />
          <h3>Run Chaos Experiments</h3>
        </div>
        <TutorialCard FeatureList={CEList} />
      </div>
      <div className={styles.subSection}>
        <div className={styles.SectionName}>
          <img src={`${baseUrl}img/logo.svg`} />
          <h3>Administer Harness Platform</h3>
        </div>
        <TutorialCard FeatureList={PlatformList} />
      </div>
    </div>
    // </Layout>
  );
}
