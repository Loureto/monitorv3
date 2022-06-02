import { useContext } from "react";
import { Alert, AlertIcon, Flex, Skeleton } from "@chakra-ui/react";
import { AuthContext } from "@contexts/authContext";
import { MdOutlineLogout } from "react-icons/md";
import Image from "next/image";
import imgPetz from "../../assets/petz.svg";
import ButtonCustom from "../Button";
import SelectCustom from "../Select";
import { DashboardContext } from "@contexts/dashboardContext";
import { HeaderProps } from "src/types/header_types";

export default function Header({ showItem, status }: HeaderProps) {
  const { signOut } = useContext(AuthContext);
  const { setSubsidiary, currentSubsidiary, subsidiaries } =
    useContext(DashboardContext);

  const handleSelectSubsidiary = (value) => {
    setSubsidiary(value);
  };

  return (
    <Flex
      width="100%"
      height="5rem"
      bgColor="yellow.100"
      px="1.25rem"
      py="1rem"
      justify="center"
    >
      <Flex
        width="100%"
        justify={showItem ? "space-between" : "center"}
        align="center"
      >
        <Flex>
          {status == "loading" && (
            <Skeleton width="147px" height="30px" fadeDuration={0.2} />
          )}

          {status == "success" && (
            <SelectCustom
              show={true}
              value={currentSubsidiary}
              onChange={({ target }) => handleSelectSubsidiary(target.value)}
            >
              <option disabled style={{ backgroundColor: "#E6C003" }}>
                SEM FILIAL
              </option>

              {subsidiaries?.subsidiaries.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                  style={{ backgroundColor: "#E6C003" }}
                >
                  {item.name}
                </option>
              ))}
            </SelectCustom>
          )}

          {status == "error" && (
            <Alert status="error">
              <AlertIcon />
              Ocorreu um erro ao carregar as filiais
            </Alert>
          )}
        </Flex>

        <Image src={imgPetz} alt="petz" />

        <ButtonCustom
          show={showItem}
          leftIcon={<MdOutlineLogout />}
          onClick={signOut}
        >
          Sair
        </ButtonCustom>
      </Flex>
    </Flex>
  );
}
