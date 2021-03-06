import App from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../graphql/lib/withApollo";
import Layout from "../components/layout/Layout";

interface IProps {
  apollo: any;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    //TODO: remove Container and its content and load fonts locally
    return (
      <ApolloProvider client={apollo}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Barlow:300,400,600|Raleway:100,300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
