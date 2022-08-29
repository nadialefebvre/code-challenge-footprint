import React from "react"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { ISubcategory } from "../types/types"

interface SubcategoryItemProps {
  setIsExpanded: (value: React.SetStateAction<boolean>) => void
  isExpanded: boolean
  subcategory: ISubcategory
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

const SubcategoryItem: React.FC<SubcategoryItemProps> = (
  props: SubcategoryItemProps
) => {
  const { setIsExpanded, isExpanded, subcategory } = props

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {subcategory.name}
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={isExpanded}
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Stack>
  )
}

export default SubcategoryItem
