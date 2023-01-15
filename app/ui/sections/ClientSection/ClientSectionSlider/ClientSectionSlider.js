import cn from 'classnames'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { SlideTimer } from '@/ui/sections/ClientSection/ClientSectionSlider/SlideTimer'

import s from './ClientSectionSlider.module.scss'

export const ClientSectionSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [beingTouched, setBeingTouched] = useState(false)
  const [timeOfLastDragEvent, setTimeOfLastDragEvent] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [originalOffset, setOriginalOffset] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [prevTouchX, setPrevTouchX] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  const sliderWrapper = useRef()

  const setIndex = useCallback(currentIdx => {
    const slidesNode = sliderWrapper.current.children

    for (
      let slides = slidesNode, n = 0, r = currentIdx;
      r < slides.length;
      r++
    ) {
      slidesNode[r].style.setProperty(
        'z-index',
        ''.concat(slidesNode.length - n)
      ),
        (n += 1)
    }

    if (0 !== currentIdx) {
      for (
        let idx = slidesNode.length - currentIdx, i = 0;
        i < currentIdx;
        i++
      ) {
        slidesNode[i].style.setProperty(
          'z-index',
          ''.concat(slidesNode.length - idx - i)
        )
      }
    }
  }, [])

  useEffect(() => {
    const slides = document.querySelectorAll('.clients-slide')

    if (slides.length > 0) {
      slides[0].classList.add('clients-slide-active')
    }
    if (slides.length > 1) {
      slides[1].classList.add('clients-slide-next')
    }

    setIndex(currentIndex)
  }, [])

  const onClickSlide = (e, idx) => {
    let sliderItems = sliderWrapper.current.children

    let prevIdx = sliderItems[idx - 1] ? idx - 1 : sliderItems.length - 1
    let nextIdx = sliderItems[idx + 1] ? idx + 1 : 0

    onHoverTransition(e, idx, 'remove')

    if (e.target.classList.contains('clients-slide-next')) {
      setTimeout(() => {
        sliderItems[prevIdx].classList.add('clients-slide-swipe')
        sliderItems[idx].classList.add('clients-slide-active')
      }, 10)

      setTimeout(() => {
        setIndex(idx)

        sliderItems[nextIdx].classList.add('clients-slide-next')
        sliderItems[idx].classList.add('clients-slide-active')

        sliderItems[prevIdx].classList.remove('clients-slide-active')
        sliderItems[prevIdx].classList.remove('clients-slide-swipe')
        sliderItems[idx].classList.remove('clients-slide-next')
      }, 500)
    } else {
      setTimeout(() => {
        sliderItems[currentIndex].classList.add('clients-slide-swipe')
        sliderItems[prevIdx].classList.add('clients-slide-swipe')
      }, 10)

      setTimeout(() => {
        setIndex(idx)

        sliderItems[idx].classList.add('clients-slide-active')
        sliderItems[nextIdx].classList.add('clients-slide-next')

        sliderItems[currentIndex].classList.remove('clients-slide-swipe')
        sliderItems[prevIdx].classList.remove('clients-slide-swipe')
        sliderItems[currentIndex].classList.remove('clients-slide-active')
        sliderItems[prevIdx].classList.remove('clients-slide-swipe')
        sliderItems[prevIdx].classList.remove('clients-slide-next')
        sliderItems[idx].classList.remove('clients-slide-next')
      }, 500)
    }

    setCurrentIndex(idx)
  }

  const onPrevSlide = idx => {
    let sliderItems = sliderWrapper.current.children

    let prevIndex = idx - 1 < 0 ? sliderItems.length - 1 : idx - 1
    let nextIdx = sliderItems[idx + 1] ? idx + 1 : 0

    setTimeout(() => {
      sliderItems[currentIndex].classList.add('clients-slide-swipe')
      sliderItems[prevIndex].classList.add('clients-slide-active')
    }, 10)

    setTimeout(() => {
      setIndex(prevIndex)

      sliderItems[idx].classList.add('clients-slide-next')

      sliderItems[currentIndex].classList.remove('clients-slide-active')
      sliderItems[currentIndex].classList.remove('clients-slide-swipe')
      sliderItems[nextIdx].classList.remove('clients-slide-next')

      for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('clients-slide-enter')
      }
    }, 500)

    setCurrentIndex(prevIndex)
  }

  const onNextSlide = idx => {
    let sliderItems = sliderWrapper.current.children

    let nextIdx = sliderItems[idx + 1] ? idx + 1 : 0
    // let prevIndex = idx - 1 < 0 ? sliderItems.length - 1 : idx - 1

    console.log(idx)
    console.log(nextIdx)

    setTimeout(() => {
      // sliderItems[currentIndex].classList.add('clients-slide-swipe')
      // sliderItems[nextIdx].classList.add('clients-slide-active')
    }, 10)

    setTimeout(() => {
      setIndex(nextIdx)

      //
      // sliderItems[nextIdx].classList.add('clients-slide-next')
      //
      // sliderItems[currentIndex].classList.remove('clients-slide-active')
      // sliderItems[currentIndex].classList.remove('clients-slide-swipe')
      // sliderItems[currentIndex].classList.remove('clients-slide-next')
      //
      // for (let i = 0; i < sliderItems.length; i++) {
      //   sliderItems[i].classList.remove('clients-slide-enter')
      // }
    }, 500)

    setCurrentIndex(nextIdx)
  }

  const onNextSlideAuto = idx => {
    let sliderItems = sliderWrapper.current.children

    let nextIdx = sliderItems[idx + 1] ? idx + 1 : 0

    let nextNextIdx = sliderItems[currentIndex + 2]
      ? idx + 2
      : idx === 2
      ? 1
      : 0

    setTimeout(() => {
      sliderItems[currentIndex].classList.add('clients-slide-swipe')
      sliderItems[nextIdx].classList.add('clients-slide-active')
    }, 10)

    setTimeout(() => {
      setIndex(nextIdx)
      setCurrentIndex(nextIdx)

      sliderItems[nextNextIdx].classList.add('clients-slide-next')

      sliderItems[idx].classList.remove('clients-slide-active')
      sliderItems[idx].classList.remove('clients-slide-swipe')
      sliderItems[idx].classList.remove('clients-slide-enter')
      sliderItems[nextIdx].classList.remove('clients-slide-next')
    }, 500)
  }

  const onHoverTransition = (e, idx, type) => {
    let { innerWidth: windowWidth } = window

    if (windowWidth <= 760) {
      return null
    }

    const currentItem = e.target
    let sliderItems = sliderWrapper.current.children

    let prevIdx = sliderItems[idx - 1] ? idx - 1 : sliderItems.length - 1

    if (type === 'add') {
      if (currentItem.classList.contains('clients-slide-next')) {
        sliderItems[prevIdx].classList.add('clients-slide-enter')
      }
      if (
        !currentItem.classList.contains('clients-slide-next') &&
        !currentItem.classList.contains('clients-slide-active')
      ) {
        sliderItems[prevIdx].classList.add('clients-slide-enter')
        sliderItems[currentIndex].classList.add('clients-slide-enter')
      }
    }

    if (type === 'remove') {
      sliderItems[prevIdx].classList.remove('clients-slide-enter')
      sliderItems[currentIndex].classList.remove('clients-slide-enter')
    }
  }

  const animateSlidingToZero = () => {
    let _left = sliderPosition
    let _velocity = velocity
    if (!beingTouched && _left < -0.01) {
      _velocity += 10 * 0.033
      _left += _velocity
      if (_left < -2000) {
        window.clearInterval(intervalId)
      }
      setSliderPosition(_left)
      setVelocity(_velocity)
    } else if (!beingTouched) {
      _left = 0
      _velocity = 0
      window.clearInterval(intervalId)
      setSliderPosition(_left)
      setVelocity(_velocity)
      setIntervalId(null)
      setOriginalOffset(0)
    }
  }

  const onHandleStart = clientX => {
    if (intervalId !== null) {
      window.clearInterval(intervalId)
    }

    setOriginalOffset(sliderPosition)
    setTouchStartX(clientX)
    setTimeOfLastDragEvent(Date.now())
    setVelocity(0)
    setBeingTouched(true)
    setIntervalId(null)
  }

  const onHandleMove = clientX => {
    if (beingTouched) {
      const touchX = clientX
      const currTime = Date.now()
      const elapsed = currTime - timeOfLastDragEvent
      const velocity = (20 * (touchX - prevTouchX)) / elapsed
      let deltaX = touchX - touchStartX + originalOffset

      if (deltaX > 0) {
        deltaX = 0
      }

      setTimeOfLastDragEvent(currTime)
      setSliderPosition(deltaX)
      setVelocity(velocity)
      setPrevTouchX(touchX)
    }
  }

  const onHandleEnd = idx => {
    let { innerWidth: windowWidth } = window
    let slidePositionEnd = windowWidth <= 760 ? -60 : -400
    if (idx === undefined) {
      return
    }
    if (sliderPosition <= slidePositionEnd) {
      let sliderItems = sliderWrapper.current.children

      let nextIdx = sliderItems[idx + 1] ? idx + 1 : 0

      let nextNextIdx = sliderItems[currentIndex + 2]
        ? idx + 2
        : idx === sliderItems.length - 2
        ? 0
        : 1

      setTimeout(() => {
        sliderItems[currentIndex].classList.add('clients-slide-swipe')
        sliderItems[nextIdx].classList.add('clients-slide-active')
      }, 10)

      setTimeout(() => {
        setIndex(nextIdx)
        setCurrentIndex(nextIdx)

        sliderItems[nextNextIdx].classList.add('clients-slide-next')

        sliderItems[idx].classList.remove('clients-slide-active')
        sliderItems[idx].classList.remove('clients-slide-swipe')
        sliderItems[idx].classList.remove('clients-slide-enter')
        sliderItems[nextIdx].classList.remove('clients-slide-next')
      }, 500)
    }
    setSliderPosition(0)
    setVelocity(0)
    setTouchStartX(0)
    setBeingTouched(false)
    setIntervalId(animateSlidingToZero())
  }

  const onHandleTouchStart = touchStartEvent => {
    touchStartEvent.preventDefault()
    onHandleStart(touchStartEvent.targetTouches[0].clientX)
  }

  const onHandleTouchMove = touchMoveEvent => {
    onHandleMove(touchMoveEvent.targetTouches[0].clientX)
  }

  const onHandleTouchEnd = idx => {
    onHandleEnd(idx)
  }

  const onHandleMouseDown = mouseDownEvent => {
    mouseDownEvent.preventDefault()
    mouseDownEvent.currentTarget.classList.add('clients-slide-drag')
    mouseDownEvent.currentTarget.classList.remove('clients-slide-enter')
    onHandleStart(mouseDownEvent.clientX)
  }

  const onHandleMouseMove = mouseMoveEvent => {
    onHandleMove(mouseMoveEvent.clientX)
  }

  const onHandleMouseUp = (e, idx) => {
    e.currentTarget.classList.remove('clients-slide-drag')
    onHandleEnd(idx)
  }

  const onHandleMouseLeave = e => {
    onHandleMouseUp(e)
  }

  return (
    <div id='reviews' className={s.wrapper}>
      <div
        className={cn(s.slider, { [s.slider__disabled]: slides.length <= 1 })}
        ref={sliderWrapper}
      >
        {slides.map((slide, idx) => {
          return (
            <div
              style={{
                transform:
                  currentIndex === idx && beingTouched
                    ? `translate3d(${sliderPosition}px, 0px, 0px)`
                    : null
              }}
              onTouchStart={touchStartEvent =>
                onHandleTouchStart(touchStartEvent)
              }
              onTouchMove={touchMoveEvent => onHandleTouchMove(touchMoveEvent)}
              onTouchEnd={() => onHandleTouchEnd(idx)}
              onMouseDown={mouseDownEvent => onHandleMouseDown(mouseDownEvent)}
              onMouseMove={mouseMoveEvent => onHandleMouseMove(mouseMoveEvent)}
              onMouseUp={e => onHandleMouseUp(e, idx)}
              onMouseLeave={e => {
                onHandleMouseLeave(e)
                onHoverTransition(e, idx, 'remove')
              }}
              onMouseEnter={e => onHoverTransition(e, idx, 'add')}
              key={idx}
              onClick={e =>
                currentIndex === idx ? null : onClickSlide(e, idx)
              }
              className={cn(s.slide, 'clients-slide')}
            >
              <div className={s.slide__icon}>
                <img src={slide.logo} alt={slide.company} />
              </div>
              <div className={cn('container', s.slide__content)}>
                <div
                  className={s.slide__text}
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                />
                <div className={s.slide__information}>
                  <div className={s.slide__author}>
                    <div className={s.slide__author_avatar}>
                      <Image
                        width={90}
                        height={90}
                        src={slide.image}
                        alt={slide.name}
                      />
                    </div>
                    <div className={s.slide__author_info}>
                      <div className={s.slide__author_name}>{slide.name}</div>
                      <div className={s.slide__author_position}>
                        {slide.post}
                      </div>
                      <div className={s.slide__author_company}>
                        {slide.company}
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(s.slide__navigation, {
                      [s.show]: currentIndex === idx
                    })}
                  >
                    {/*<button onClick={() => onPrevSlide(idx)}>*/}
                    {/*<ArrowSliderLeft />*/}
                    {/*</button>*/}
                    {slides.length > 1 && (
                      <SlideTimer
                        current={idx + 1}
                        onChangeSlide={onNextSlideAuto}
                        currentSlideIndex={currentIndex}
                        total={slides.length}
                      />
                    )}
                    {/*<button onClick={() => onNextSlide(idx)}>*/}
                    {/*  <ArrowSliderRight />*/}
                    {/*</button>*/}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
