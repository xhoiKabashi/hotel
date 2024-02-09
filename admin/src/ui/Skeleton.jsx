/* eslint-disable react/prop-types */

import Skeleton from "@mui/joy/Skeleton";

const SkeletonIU = ({ children, onLoading }) => {
  if (onLoading) {
    return (
      <Skeleton
        level="h1"
        loading={onLoading}
        height={75}
        margin="45px"
        variant="text"
        sx={{
          borderRadius: 0,
          "--Card-radius": 0,
          padding: 0,
        }}
      />
    );
  } else {
    return children;
  }
};

export default SkeletonIU;
