import React from "react"
import Chip from "@mui/material/Chip"

interface FootprintChipProps {
  labelText: string
  chipColor: any
  size?: any
}

const FootprintChip: React.FC<FootprintChipProps> = (
  props: FootprintChipProps
) => {
  const { size, labelText, chipColor } = props

  return (
    <Chip
      label={labelText}
      color={chipColor}
      size={size}
      variant="outlined"
      sx={{ width: "150px" }}
    />
  )
}

export default FootprintChip
