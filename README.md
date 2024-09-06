## Installation

```sh
npm install draggable-react-drawer
```

## ✨ Usage

props = {
 open: boolean;
 setOpen: function;
 verticalRatio: number;
}

- open and setOpen to control drawer
- verticalRatio to set vertical height of drawer from 1 to 100, default value 100


```
import {Drawer} from "draggable-react-drawer";
```

```
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

```
<Drawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} verticalRatio={100}>
   <p>example menu</p>      
</Drawer>
```
