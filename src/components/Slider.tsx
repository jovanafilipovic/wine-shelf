import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props: any) => props.direction === "left" && "10px"};
//   right: ${(props: any) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: any) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  background-color: pink;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 6;
  object-fit: cover;
  background-color: red;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  console.log("SLIDER ITEMS", sliderItems);

  return (
    <Container>
      {/* <Arrow onClick={() => handleClick("left")}> */}
      <ArrowLeftIcon />
      {/* </Arrow> */}
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* <Arrow onClick={() => handleClick("right")}> */}
      <ArrowRightIcon />
      {/* </Arrow> */}
    </Container>
  );
};

export default Slider;
