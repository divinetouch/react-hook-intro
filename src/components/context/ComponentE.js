import React, {Component, useContext } from 'react';
import ComponentF from "./ComponentF";
import {UserContext, ChannelContext} from "../../App";

function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
    return (
      <div>
        <div>
          Component E
        </div>
        {user} - {channel}
        <ComponentF/>
      </div>
    );
}

export default ComponentE;