import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import LoginRegister from "../auth/loginRegister";

export default function AppHeader() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    // <Navbar disableAnimation isBordered>
    //   <NavbarContent className="sm:hidden" justify="start">
    //     <NavbarMenuToggle />
    //   </NavbarContent>

    //   <NavbarContent className="sm:hidden pr-3" justify="center">
    //     <NavbarBrand>
    //       <Image
    //         src="/vercel.svg"
    //         alt="Vercel Logo"
    //         className="dark:invert"
    //         width={100}
    //         height={24}
    //         priority
    //       />
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarBrand>
    //       <Image
    //         src="/vercel.svg"
    //         alt="Vercel Logo"
    //         className="dark:invert"
    //         width={100}
    //         height={24}
    //         priority
    //       />
    //     </NavbarBrand>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page" color="warning">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <ButtonLogin />
    //     </NavbarItem>
    //     <NavbarItem>
    //       <ButtonRegister />
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           className="w-full"
    //           color={
    //             index === 2
    //               ? "warning"
    //               : index === menuItems.length - 1
    //               ? "danger"
    //               : "foreground"
    //           }
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>

    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[4px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-green-common",
        ],
      }}
      className="h-[78px] !text-[17px]"
      maxWidth="2xl"
      isBordered
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" />
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 !text-[17px]"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="/">
            Giải đấu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" color="foreground">
            Điểm số
          </Link>
        </NavbarItem>
        <NavbarItem aria-current="page" isActive>
          <Link href="/vi/rankings/singles" color="foreground">
            Xếp hạng
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Người chơi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Tin tức & Video
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Thống kê
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LoginRegister />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AiOutlineSearch className="h-6 w-6" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
