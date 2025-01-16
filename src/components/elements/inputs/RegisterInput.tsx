import { Flex, Input } from '@chakra-ui/react'
import RedButton from '../button/RedButton'

function RegisterInput() {
  return (
    <form action="">
        <Flex flexDir={"column"} gap={"1rem"}>
          <Input placeholder="Username" size={{ base: "sm", md: "md" }} />
          <Input placeholder="Email" size={{ base: "sm", md: "md" }} />
          <Input placeholder="Password" size={{ base: "sm", md: "md" }} type="password" />
          <RedButton label={"Register"} />
        </Flex>
      </form>
  )
}

export default RegisterInput