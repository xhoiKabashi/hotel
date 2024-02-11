/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Typography from "@mui/joy/Typography";
import SkeletonUI from "./Skeleton";

import { CiCircleInfo } from "react-icons/ci";

const Info = ({ src }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="z-0">
      <Tooltip
        placement="left-end"
        title={
          <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
            {imageError ? (
              <div className="h-52 w-52">
                <SkeletonUI />
              </div>
            ) : (
              <Typography textColor="white" fontSize="sm" sx={{ mb: 1 }}>
                <img
                  src={src}
                  className="h-52 min-w-52"
                  onError={handleImageError}
                />
              </Typography>
            )}
          </Box>
        }
        arrow
        size="sm"
      >
        <Typography className="cursor-pointer">
          <CiCircleInfo className="h-5 w-5" />
        </Typography>
      </Tooltip>
    </div>
  );
};

export default Info;
