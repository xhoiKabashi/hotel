/* eslint-disable react/prop-types */
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Typography from "@mui/joy/Typography";

import { CiCircleInfo } from "react-icons/ci";
// import { image } from "../data/edit/genInfo";

const Info = ({ src }) => {
  return (
    <div className="z-0">
      <div>
        <div>
          <Tooltip
            placement="left-end"
            title={
              <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
                <Typography textColor="white" fontSize="sm" sx={{ mb: 1 }}>
                  <img src={src} className=" h-52" />
                </Typography>
              </Box>
            }
            arrow
            size="sm"
          >
            <Typography className="  cursor-pointer">
              <CiCircleInfo className=" h-5 w-5" />
            </Typography>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Info;
