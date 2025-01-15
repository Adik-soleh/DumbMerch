import { Flex, Input } from '@chakra-ui/react'
import RedButton from '../button/RedButton'

function LoginInput() {
  return (
    <form action="">
        <Flex flexDir={"column"} gap={"1rem"}>
          <Input />
          <Input />
          <RedButton label={"Login"} />
        </Flex>
      </form>
  )
}

export default LoginInput