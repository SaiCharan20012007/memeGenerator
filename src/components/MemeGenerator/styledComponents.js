// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`

export const SubContainer1 = styled.div`
  height: 100vh;
  width: 48vw;
  border-style: solid;
  border-color: red;
  padding: 20px;
`
export const SubContainer2 = styled.div`
  height: 100vh;
  width: 48vw;
  background-image: url(${props => props.image});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 30px;
`

export const Heading = styled.h1`
  font-family: Open Sans;
  color: #35469c;
  text-align: center;
`

export const Label = styled.label`
  color: #7e858e;
  margin-left: 10px;
  font-weight: 600;
  display: block;
  margin-top: 25px;
`
export const InputEl = styled.input`
  color: #5a7184;
  width: 37vw;
  border-style: solid;
  border-color: #7e858e;
  padding: 7px;
  margin: 10px;
  border-radius: 7px;
  height: 45px;
  font-size: 17px;
`
export const SelectEl = styled.select`
  color: #5a7184;
  width: 37vw;
  border-style: solid;
  border-color: #7e858e;
  padding: 7px;
  margin: 10px;
  border-radius: 7px;
  height: 45px;
  font-size: 17px;
  display: block;
`
export const Text = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: ${props => props.size}px;
`

export const CustomButton = styled.button`
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  color: #ffffff;
  background-color: #0b69ff;
  border-width: 0px;
  height: 50px;
  border-radius: 8px;
  font-size: 20px;
  margin: 20px;
`
