import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import FloatingTriggerButton from "../../../../lib/FloatingTriggerButton";


interface SliderTriggerProps {
  collapsed: boolean;
  onClick: () => void
}

const SiderTrigger: React.FC<SliderTriggerProps> = ({ collapsed, onClick }) => {
  return (
    <FloatingTriggerButton onClick={onClick}>
      <Tooltip placement='right' title={`Панелди ${collapsed ? 'ачуу' : 'жабуу'}`}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Tooltip>
    </FloatingTriggerButton>
  )
}

export default SiderTrigger;