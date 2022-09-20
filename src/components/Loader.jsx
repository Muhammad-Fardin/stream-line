import { Stack } from "@mui/system";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = ({direction}) => {
  return (
    <SkeletonTheme baseColor="black" highlightColor="red">
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
        <Skeleton height={250} width={300} style={{margin: "10px"}} />
        <Skeleton height={250} width={300} style={{margin: "10px"}}/>
        <Skeleton height={250} width={300} style={{margin: "10px"}}/>
        <Skeleton height={250} width={300} style={{margin: "10px"}}/>
        <Skeleton height={250} width={300} style={{margin: "10px"}}/>
        <Skeleton height={250} width={300} style={{margin: "10px"}}/>

      </Stack>
    </SkeletonTheme>
  );
};

export default Loader;
