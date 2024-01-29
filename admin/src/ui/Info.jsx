/* eslint-disable react/prop-types */
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";
import Typography from "@mui/joy/Typography";

import { CiCircleInfo } from "react-icons/ci";
import { BsLightbulb } from "react-icons/bs";

const Info = ({ text }) => {
  return (
    <div className="z-0">
      <div>
        <div>
          <Tooltip
            color="primary"
            title={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 320,
                  justifyContent: "center",
                  p: 1,
                }}
              >
                <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
                  <div>
                    <BsLightbulb className="h-5 w-5" />
                  </div>

                  <div>
                    <Typography textColor="white" fontSize="sm" sx={{ mb: 1 }}>
                      {text}
                    </Typography>
                  </div>
                </Box>
              </Box>
            }
            arrow
            size="sm"
          >
            <Typography className="  cursor-pointer">
              <CiCircleInfo className=" h-6 w-6" />
            </Typography>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Info;
