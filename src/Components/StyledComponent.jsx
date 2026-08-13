import styled from "styled-components";
const StyledComponent = () => {
    // const Heading = styled.h1`
    //  color:red;
    //  border:1px solid green;
    //  border-radius:5px;
    //  padding:20px;
    //  margin:20px;
    // `
    const Heading = styled.h1({
     color:"red",
     border:"1px solid green",
     borderRadius:"5px",
     padding:"20px",
     margin:"20px"
    });

    const Button = styled.button`
    color:red;
    width:130px;
    height:40px;
    margin:20px;
    `
    const Paragraph = styled.p`
    `
    return(
        <>
           <h1>Styled Components</h1>
           <Heading>Hello Heading</Heading>
           <Heading>Hello Heading 2</Heading>
           <Heading>Hello Heading 3</Heading>
           <Heading>Hello Heading 4</Heading>
           <Button>Submit</Button>
           <Button>Submit</Button>
           <Button>Submit</Button>
           <Button>Submit</Button>
           <Paragraph>Hi this paragraph</Paragraph>
        </>
    )
}

export default StyledComponent;