import React, { Component } from "react";
import { MeSelection } from "@components";

export default class extends Component {
  static async getInitialProps(ctx) {
    // err req res pathname query asPath isServer
    const { pathname } = ctx;

    return { pathname };
  }
  render() {
    const { pathname } = this.props
    return (
      <MeSelection pathname={pathname}>
        申请消息
      </MeSelection>
    )
  }
}
