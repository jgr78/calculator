import Calculator from '../components/calculator'

  export default class extends React.Component {
    render() {
      return (
        <>
        <div className="App fullwidth">
          <Calculator />
        </div>
        <style jsx global>{`
          html {
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
          }
          .fullwidth {
            width: 100%;
            margin: 0 auto;
          }
          `}</style>
        </>
      )
    }
  }


