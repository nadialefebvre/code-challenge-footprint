import React from "react"
import Chip, { ChipTypeMap } from "@mui/material/Chip"

interface FootprintChipProps {
  labelText: React.ReactNode
  chipColor: ChipTypeMap["props"]["color"]
  size?: ChipTypeMap["props"]["size"]
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
