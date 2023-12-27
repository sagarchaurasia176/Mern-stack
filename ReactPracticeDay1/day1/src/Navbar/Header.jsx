import React from "react"
import '../index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Header() {
        return (
            <Stack direction="row" spacing={2}>
              <Button>Primary</Button>
              <Button disabled>Disabled</Button>
              <Button href="#text-buttons">Link</Button>
            </Stack>
          );
        
}

export default Header;
