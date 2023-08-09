"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProductsWrapper } from "./styles";
import DigitalXray from "./components/DigitalXray";
import IntraoralScanner from "./components/IntraoralScanner";
import Introduction from "./components/Introduction";
import ZoomWhitening from "./components/ZoomWhitening";

const animationVariant = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Products = () => {
  return (
    <ProductsWrapper>
      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <Introduction />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <ZoomWhitening />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <IntraoralScanner />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <DigitalXray />
      </motion.div>
    </ProductsWrapper>
  );
};

export default Products;
