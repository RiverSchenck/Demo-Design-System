import figma from "@figma/code-connect";
import { GoogleIcon } from "./Google"
import { GitHubIcon } from "./Github";


  figma.connect(GoogleIcon,
    "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=1203-2170",
    {
      example: () => <GoogleIcon size={16} />,
    }
  );

  figma.connect(GitHubIcon,
    "https://www.figma.com/design/8AQj34ysfReEm8l3z7asLu/DevMode-Demo?node-id=2123-4479",
    {
      example: () => <GitHubIcon size={16} />,
    }
  );
