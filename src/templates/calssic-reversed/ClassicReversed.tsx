import Classic from "../classic/Classic";
import { TemplateProps } from "../common/types";

const ClassicReversed: React.FC<TemplateProps> = ({ data }) => {
  return <Classic reversed data={data} />
}

export default ClassicReversed