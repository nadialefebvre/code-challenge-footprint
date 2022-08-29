import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import uniqid from "uniqid"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Collapse from "@mui/material/Collapse"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Chip from "@mui/material/Chip"

import Loader from "../components/Loader"
import { Props } from "../types/types"

// interface and styled from MaterialUI
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

const CategoryTransactions: React.FC<Props> = ({
  categories,
  transactions,
  isLoading,
}: Props) => {
  const { mainCategory } = useParams()

  const navigate = useNavigate()

  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const categoryTransactions = transactions.filter(
    transaction => transaction.mainCategory === mainCategory
  )

  const categorySubcategories = categories.length
    ? categories.find(category => category.mainCategory === mainCategory)
        ?.subcategories
    : []

  useEffect(() => {
    if (categorySubcategories === undefined) {
      navigate("/error404")
    }
  })

  return (
    <Container maxWidth="md">
      <Box sx={{ height: 40 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
            My footprint
          </Link>
          <Typography color="text.primary">{mainCategory}</Typography>
        </Breadcrumbs>
      </Box>
      <Typography align="center" variant="h2" color="text.secondary">
        Transactions
      </Typography>
      <Box sx={{ height: 40 }}></Box>
      <Stack spacing={4}>
        {isLoading ? (
          <Loader />
        ) : (
          categorySubcategories?.map(subcategory => (
            <Card key={subcategory.name}>
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
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Stack divider={<Divider flexItem light />}>
                      {categoryTransactions
                        .filter(
                          transaction =>
                            transaction.subCategory === subcategory.name
                        )
                        .map(item => (
                          <ListItem key={uniqid()}>
                            <ListItemText
                              primary={item.transaction.description}
                              secondary={`${item.transaction.amount.value} USD on ${item.transaction.madeOn}`}
                            />
                            <Chip
                              label={`${Math.round(
                                item.transaction.footprint
                                  .carbonEmissionInGrams / 1000
                              )} kg CO2e`}
                              color={
                                item.transaction.footprint
                                  .carbonEmissionInGrams < 3000
                                  ? "success"
                                  : "warning"
                              }
                              size="small"
                              variant="outlined"
                              sx={{ width: "150px" }}
                            />
                          </ListItem>
                        ))}
                    </Stack>
                  </List>
                </CardContent>
              </Collapse>
            </Card>
          ))
        )}
      </Stack>
    </Container>
  )
}

export default CategoryTransactions
