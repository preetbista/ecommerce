import React from 'react';
import { Card, CardActions, CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterButtom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography varient="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product