import { Button, Container, Box} from '@chakra-ui/react';
import { Step, Steps, useSteps } from "chakra-ui-steps";

const steps = [
    {
      id: 1,
      day: "Monday",
    },
    {
      id: 2,
      day: "Tuesday",
    },
    {
      id: 3,
      day: "Wednesday",
    },
    {
      id: 4,
      day: "Thursday",
    }
  ];

const Progressbar = ()=> {

    const { nextStep, prevStep, setStep, activeStep } = useSteps({
        initialStep: 0
      });

    return (
        <Container maxW={"8xl"}>
          <Box width="100%">
            <Steps
              labelOrientation="vertical"
              activeStep={activeStep}
              size="lg"
              onClickStep={(step) => setStep(step)}
            >
              {steps.map(({ id, day }) => (
                <Step label={day} key={id}>
                </Step>
              ))}
            </Steps>
            <Button
              onClick={() => {
                nextStep(1);
              }}
              style={{marginLeft:"5px"}}
            >
              Forward
            </Button>
            <Button
              onClick={() => {
                prevStep(1);
              }}
            >
              Previous
            </Button>
          </Box>
        </Container>
      );
}

export default Progressbar;