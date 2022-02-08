import React from 'react';
import './pokemon.css'


const Stats = ({ pokemonItem }) => {

  let statsArray = pokemonItem.stats;
  // console.log(statsArray)

  let numsArray = []
  for (let i = 0; i < statsArray.length; i++) {
    const newObj = statsArray[i]
    // console.log(newObj)

    const nums = (newObj.base_stat)
    // console.log(nums)
    numsArray.push(Math.round(nums / 17))
  }

  console.log(numsArray)

  const ulList = document.querySelectorAll(".stat-ul-child")
  // console.log(ulList)

  const ulArray = Array.from(ulList)
  console.log(ulArray)


// console.log(ulArray[0])
  // // console.log(Array.from(ulArray[0].children))
  // let liArray1 = Array.from(ulArray[0].children)
  // console.log(liArray1)
  // // liArray1.indexOf(liArray1[0]) < numsArray[0] ? liArray1[0].style.backgroundColor = ("#30a7d7") : null
  // // liArray1.indexOf(liArray1[1]) < numsArray[0] ? liArray1[1].style.backgroundColor = ("#30a7d7") : null
  // // liArray1.indexOf(liArray1[2]) < numsArray[0] ? liArray1[2].style.backgroundColor = ("#30a7d7") : null
  // // liArray1.indexOf(liArray1[3]) < numsArray[0] ? liArray1[3].style.backgroundColor = ("#30a7d7") : null
  // // liArray1.indexOf(liArray1[4]) < numsArray[0] ? liArray1[4].style.backgroundColor = ("#30a7d7") : null
  // // liArray1.indexOf(liArray1[5]) < numsArray[0] ? liArray1[5].style.backgroundColor = ("#30a7d7") : null

  // // let liArray2 = Array.from(ulArray[1].children)
  // // // console.log(liArray2)
  // // liArray2.indexOf(liArray2[0]) < numsArray[1] ? liArray2[0].style.backgroundColor = ("#30a7d7") : null
  // // liArray2.indexOf(liArray2[1]) < numsArray[1] ? liArray2[1].style.backgroundColor = ("#30a7d7") : null
  // // liArray2.indexOf(liArray2[2]) < numsArray[1] ? liArray2[2].style.backgroundColor = ("#30a7d7") : null
  // // liArray2.indexOf(liArray2[3]) < numsArray[1] ? liArray2[3].style.backgroundColor = ("#30a7d7") : null
  // // liArray2.indexOf(liArray2[4]) < numsArray[1] ? liArray2[4].style.backgroundColor = ("#30a7d7") : null
  // // liArray2.indexOf(liArray2[5]) < numsArray[1] ? liArray2[5].style.backgroundColor = ("#30a7d7") : null

  // // let liArray3 = Array.from(ulArray[2].children)
  // // // console.log(liArray3)
  // // liArray3.indexOf(liArray3[0]) < numsArray[2] ? liArray3[0].style.backgroundColor = ("#30a7d7") : null
  // // liArray3.indexOf(liArray3[1]) < numsArray[2] ? liArray3[1].style.backgroundColor = ("#30a7d7") : null
  // // liArray3.indexOf(liArray3[2]) < numsArray[2] ? liArray3[2].style.backgroundColor = ("#30a7d7") : null
  // // liArray3.indexOf(liArray3[3]) < numsArray[2] ? liArray3[3].style.backgroundColor = ("#30a7d7") : null
  // // liArray3.indexOf(liArray3[4]) < numsArray[2] ? liArray3[4].style.backgroundColor = ("#30a7d7") : null
  // // liArray3.indexOf(liArray3[5]) < numsArray[2] ? liArray3[5].style.backgroundColor = ("#30a7d7") : null

  // // let liArray4 = Array.from(ulArray[3].children)
  // // // console.log(liArray4)
  // // liArray4.indexOf(liArray4[0]) < numsArray[3] ? liArray4[0].style.backgroundColor = ("#30a7d7") : null
  // // liArray4.indexOf(liArray4[1]) < numsArray[3] ? liArray4[1].style.backgroundColor = ("#30a7d7") : null
  // // liArray4.indexOf(liArray4[2]) < numsArray[3] ? liArray4[2].style.backgroundColor = ("#30a7d7") : null
  // // liArray4.indexOf(liArray4[3]) < numsArray[3] ? liArray4[3].style.backgroundColor = ("#30a7d7") : null
  // // liArray4.indexOf(liArray4[4]) < numsArray[3] ? liArray4[4].style.backgroundColor = ("#30a7d7") : null
  // // liArray4.indexOf(liArray4[5]) < numsArray[3] ? liArray4[5].style.backgroundColor = ("#30a7d7") : null

  // // let liArray5 = Array.from(ulArray[4].children)
  // // // console.log(liArray5)
  // // liArray5.indexOf(liArray5[0]) < numsArray[4] ? liArray5[0].style.backgroundColor = ("#30a7d7") : null
  // // liArray5.indexOf(liArray5[1]) < numsArray[4] ? liArray5[1].style.backgroundColor = ("#30a7d7") : null
  // // liArray5.indexOf(liArray5[2]) < numsArray[4] ? liArray5[2].style.backgroundColor = ("#30a7d7") : null
  // // liArray5.indexOf(liArray5[3]) < numsArray[4] ? liArray5[3].style.backgroundColor = ("#30a7d7") : null
  // // liArray5.indexOf(liArray5[4]) < numsArray[4] ? liArray5[4].style.backgroundColor = ("#30a7d7") : null
  // // liArray5.indexOf(liArray5[5]) < numsArray[4] ? liArray5[5].style.backgroundColor = ("#30a7d7") : null

  // // let liArray6 = Array.from(ulArray[5].children)
  // // // console.log(liArray6)
  // // liArray6.indexOf(liArray6[0]) < numsArray[5] ? liArray6[0].style.backgroundColor = ("#30a7d7") : null
  // // liArray6.indexOf(liArray6[1]) < numsArray[5] ? liArray6[1].style.backgroundColor = ("#30a7d7") : null
  // // liArray6.indexOf(liArray6[2]) < numsArray[5] ? liArray6[2].style.backgroundColor = ("#30a7d7") : null
  // // liArray6.indexOf(liArray6[3]) < numsArray[5] ? liArray6[3].style.backgroundColor = ("#30a7d7") : null
  // // liArray6.indexOf(liArray6[4]) < numsArray[5] ? liArray6[4].style.backgroundColor = ("#30a7d7") : null
  // // liArray6.indexOf(liArray6[5]) < numsArray[5] ? liArray6[5].style.backgroundColor = ("#30a7d7") : null



  return (

    <div className='stats-wrapper'>
      <div className="stats-div">
        <h3 className='stats-header'>Stats</h3>
        <div className='stats-container'>
          <ul className='stat-ul-parent'>
            {statsArray.map((item) => {
              return (

                <div className='stat-ul-div'>

                  <span className='stat-name'>
                    {item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1, 8) +
                      item.stat.name.charAt(8).toUpperCase() +
                      item.stat.name.slice(9)
                    }</span>

                  <ul className='stat-ul-child'>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    <li className='stat-li'></li>
                    {/* <StarBar /> */}
                  </ul>
                </div>
              );
            }
            )}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Stats
