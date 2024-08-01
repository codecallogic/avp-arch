
const SVG = ({svg, width, height, schemeOne, schemeTwo, backgroundColor, dataOne, dataTwo, dataThree}) => {

  const selectSVG = (svg) => {
    switch(svg){

        case 'arrowDown':
          return <svg viewBox="0 0 24 24" width={width} height={height}>
            <path fill={schemeOne} d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.71,10.71-4,4a1,1,0,0,1-1.41,0l-4-4a1,1,0,0,1,1.41-1.41L12,13.59l3.29-3.29a1,1,0,0,1,1.41,1.41Z"/>
          </svg>
          break;

        case 'close':
          return <svg enableBackground="new 0 0 48 48" height={height} version="1.1" viewBox="0 0 48 48" width={width} fill={schemeOne}>
            <g id="BG_xA0_Image_1_"/><g id="nature_1_"/><g id="Nature"/><g id="e-commerce_1_"/><g id="E-commerce"/><g id="organizing_1_"/><g id="Organizing"/><g id="business_1_"/><g id="Business"/><g id="data_communications_1_"/><g id="Data__x26__communications"/><g id="UI_1_"><g id="x_2_"><g><polygon points="48,1.416 46.585,0 24,22.599 1.445,0.03 0.031,1.446 22.585,24.015 0,46.584 1.414,48 24,25.431 46.555,48      47.969,46.584 25.415,24.015    "/></g></g></g><g id="GUI"/><g id="Media_files_icons_copy_1_"/><g id="Media_files"/>
          </svg>
          break;

        case 'plus':
          return <svg enableBackground="new 0 0 128 128" height={height} id="Layer_1" version="1.1" viewBox="0 0 128 128" width={width}><g>
            <path fill={schemeOne} d="M64,0C28.71,0,0,28.71,0,64s28.71,64,64,64s64-28.71,64-64S99.29,0,64,0z M64,120C33.122,120,8,94.879,8,64   C8,33.122,33.122,8,64,8c30.879,0,56,25.122,56,56C120,94.879,94.879,120,64,120z"/>
            <path fill={schemeOne} d="M96,60H68V32c0-2.209-1.791-4-4-4s-4,1.791-4,4v28H32c-2.209,0-4,1.791-4,4s1.791,4,4,4h28v28c0,2.209,1.791,4,4,4   s4-1.791,4-4V68h28c2.209,0,4-1.791,4-4S98.209,60,96,60z"/>
            </g>
          </svg>
          break;

        case 'arrowRight':
          return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width={width} height={height}>
            <path fill={schemeOne} d="M 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 Z M 12 24 L 30 24 L 30 18 L 37 25 L 30 32 L 30 26 L 12 26 Z"/>
          </svg>
          break;

        case 'arrowLeft':
          return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width={width} height={height}>
              <path fill={schemeOne} d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 38 26 L 20 26 L 20 32 L 13 25 L 20 18 L 20 24 L 38 24 Z"/>
            </svg>
          break;
        
    }
  }
  
  return (
    <>
      {selectSVG(svg)}
    </>
  )
}

export default SVG