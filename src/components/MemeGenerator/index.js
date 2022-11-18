import {Component} from 'react'
import {
  MemeGeneratorContainer,
  SubContainer1,
  SubContainer2,
  Label,
  InputEl,
  SelectEl,
  Heading,
  Text,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    bgUrl: '',
    topText: '',
    bottomText: '',
    activeOption: fontSizesOptionsList[0].displayText,
    status: false,
  }

  onChangeUrl = event => this.setState({bgUrl: event.target.value})

  topTextChange = event => this.setState({topText: event.target.value})

  onChangeBottomText = event => this.setState({bottomText: event.target.value})

  changeSize = event => this.setState({activeOption: event.target.value})

  generate = () => {
    const {bgUrl, topText, bottomText, activeOption} = this.state
    return (
      <SubContainer2 image={bgUrl} data-testid="meme">
        <Text size={activeOption}>{topText}</Text>
        <Text size={activeOption}>{bottomText}</Text>
      </SubContainer2>
    )
  }

  create = () => this.setState({status: true})

  render() {
    const {status} = this.state

    return (
      <MemeGeneratorContainer>
        <SubContainer1>
          <form>
            <Heading>Meme Generator</Heading>
            <label htmlFor="imgid">Image URL</label>
            <InputEl
              placeholder="Enter the Image URL"
              type="text"
              id="imgid"
              onChange={this.onChangeUrl}
            />
            <label htmlFor="topid">Top Text</label>
            <InputEl
              placeholder="Enter the Top Text"
              type="text"
              id="topid"
              onChange={this.topTextChange}
            />
            <label htmlFor="botid">Bottom Text</label>
            <InputEl
              placeholder="Enter the Bottom Text"
              type="text"
              id="botid"
              onChange={this.onChangeBottomText}
            />
            <label htmlFor="sizeid">Font Size</label>
            <SelectEl id="sizeid" onChange={this.changeSize}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.displayText}>
                  {each.displayText}
                </option>
              ))}
            </SelectEl>
            <CustomButton onClick={this.create}>Generate</CustomButton>
          </form>
        </SubContainer1>
        {status ? this.generate() : ''}
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
