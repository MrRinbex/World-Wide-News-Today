"use client";
import TimeAgo from "react-timeago";

type Props = {
  time: string;
};

const LiveTimestamp = ({ time }: Props) => {
  return <TimeAgo date={time} />;
};

export default LiveTimestamp;
