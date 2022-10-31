import cn from 'classnames'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import s from './ClientSectionSlider.module.scss'

const slides = [
  {
    img: '/moc/icon_company/mts.svg',
    text: '«Хотелось бы отметить глубокую аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта. Рекомендуем PR-агентство LED как надежного партнера в разработке веб‑сайтов и сложных сервисных систем».\n',
    avatar: '/moc/author.jpg',
    name: 'Максим Десятых 1',
    position: 'Старший специалист по digital-ветринам',
    company: 'МТС'
  },
  {
    img: '/moc/icon_company/dhr.svg',
    text: '«Хотелось бы отметить глубокую аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта. Рекомендуем PR-агентство LED как надежного партнера в разработке веб‑сайтов и сложных сервисных систем».\n',
    avatar: '/moc/author.jpg',
    name: 'Максим Десятых 2',
    position: 'Старший специалист по digital-ветринам',
    company: 'МТС'
  },
  {
    img: '/moc/icon_company/crock.svg',
    text: '«Хотелось бы отметить глубокую аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта. Рекомендуем PR-агентство LED как надежного партнера в разработке веб‑сайтов и сложных сервисных систем».\n',
    avatar: '/moc/author.jpg',
    name: 'Максим Десятых 3',
    position: 'Старший специалист по digital-ветринам',
    company: 'МТС'
  },
  {
    img: '/moc/icon_company/rgru.svg',
    text: '«Хотелось бы отметить глубокую аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта. Рекомендуем PR-агентство LED как надежного партнера в разработке веб‑сайтов и сложных сервисных систем».\n',
    avatar: '/moc/author.jpg',
    name: 'Максим Десятых 1',
    position: 'Старший специалист по digital-ветринам',
    company: 'МТС'
  },
  {
    img: '/moc/icon_company/inc.svg',
    text: '«Хотелось бы отметить глубокую аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта. Рекомендуем PR-агентство LED как надежного партнера в разработке веб‑сайтов и сложных сервисных систем».\n',
    avatar: '/moc/author.jpg',
    name: 'Максим Десятых 2',
    position: 'Старший специалист по digital-ветринам',
    company: 'МТС'
  },
  {
    img: '/moc/icon_company/habr.svg',
    text: '«Хотелось бы отметить глубокую аналитическую работу, которая проводится перед выполнением каждой задачи. Это позволяет оптимизировать рабочий процесс и добиться высокого качества готового продукта. Рекомендуем PR-агентство LED как надежного партнера в разработке веб‑сайтов и сложных сервисных систем».\n',
    avatar: '/moc/author.jpg',
    name: 'Максим Десятых 3',
    position: 'Старший специалист по digital-ветринам',
    company: 'МТС'
  }
]

export const ClientSectionSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef()

  const [nodeSlides, setNodeSlides] = useState([])

  useEffect(() => {
    const slides = document.querySelectorAll('.clients-slide')
    setNodeSlides(slides)

    if (slides.length > 0) {
      slides[0].classList.add('clients-slide-active')
    }

    if (slides.length > 1) {
      slides[1].classList.add('clients-slide-next')
    }
  }, [])

  useEffect(() => {
    if (nodeSlides.length > 0) {
      setTimeout(() => {
        for (
          let slides = nodeSlides, n = 0, r = currentIndex;
          r < slides.length;
          r++
        ) {
          nodeSlides[r].style.setProperty(
            'z-index',
            ''.concat(nodeSlides.length - n)
          ),
            (n += 1)
        }

        if (0 !== currentIndex) {
          for (
            let idx = nodeSlides.length - currentIndex, i = 0;
            i < currentIndex;
            i++
          ) {
            nodeSlides[i].style.setProperty(
              'z-index',
              ''.concat(nodeSlides.length - idx - i)
            )
          }
        }
      }, 500)
    }
  }, [nodeSlides, currentIndex])

  const onClickSlide = useCallback(
    (e, nextIdx) => {
      let parentItems = e.target.parentNode.children
      setCurrentIndex(nextIdx)

      if (parentItems[currentIndex]) {
        parentItems[currentIndex].classList.remove('clients-slide-enter')
      } else {
        parentItems[0].classList.remove('clients-slide-enter')
      }

      if (e.target.classList.contains('clients-slide-next')) {
        setTimeout(() => {
          parentItems[currentIndex].classList.add('clients-slide-swipe')
          parentItems[nextIdx].classList.add('clients-slide-active')
        }, 10)

        setTimeout(() => {
          parentItems[currentIndex].classList.remove('clients-slide-swipe')
          parentItems[currentIndex].classList.remove('clients-slide-active')

          parentItems[nextIdx].classList.remove('clients-slide-next')

          if (parentItems.length > nextIdx + 1) {
            parentItems[nextIdx + 1].classList.add('clients-slide-next')
          } else {
            parentItems[0].classList.add('clients-slide-next')
          }
        }, 500)
      } else {
        setTimeout(() => {
          parentItems[currentIndex].classList.add('clients-slide-swipe')

          if (nextIdx - 1 < 0) {
            parentItems[parentItems.length - 1].classList.add(
              'clients-slide-swipe'
            )
          } else {
            parentItems[nextIdx - 1].classList.add('clients-slide-swipe')
          }

          parentItems[nextIdx].classList.add('clients-slide-active')
        }, 10)

        setTimeout(() => {
          parentItems[currentIndex].classList.remove('clients-slide-swipe')
          parentItems[currentIndex].classList.remove('clients-slide-active')

          if (parentItems.length > currentIndex + 1) {
            parentItems[currentIndex + 1].classList.remove(
              'clients-slide-swipe'
            )
            parentItems[0].classList.remove('clients-slide-next')
            parentItems[currentIndex + 1].classList.remove('clients-slide-next')
          } else {
            parentItems[0].classList.remove('clients-slide-swipe')
            parentItems[parentItems.length - 1].classList.remove(
              'clients-slide-next'
            )
          }

          if (parentItems.length > nextIdx + 1) {
            parentItems[nextIdx + 1].classList.add('clients-slide-next')
          } else {
            parentItems[0].classList.add('clients-slide-next')
          }
        }, 500)
      }
    },
    [currentIndex]
  )

  const dragSlide = e => {
    e.preventDefault()
    console.log(e)
  }

  const onHoverTransition = (e, type) => {
    const currentItem = e.target

    if (type === 'add') {
      if (currentItem.classList.contains('clients-slide-next')) {
        nodeSlides[currentIndex].classList.add('clients-slide-enter')
      }

      if (
        !currentItem.classList.contains('clients-slide-next') &&
        !currentItem.classList.contains('clients-slide-active')
      ) {
        nodeSlides[currentIndex].classList.add('clients-slide-enter')
        nodeSlides[currentIndex + 1].classList.add('clients-slide-enter')
      }
    }

    if (type === 'remove') {
      nodeSlides[currentIndex].classList.remove('clients-slide-enter')
      nodeSlides[currentIndex + 1].classList.remove('clients-slide-enter')
    }
  }

  return (
    <div id='reviews' className={s.wrapper}>
      <div className={s.slider} ref={ref}>
        {slides.map((slide, idx) => {
          return (
            <div
              key={idx}
              onDragOver={dragSlide}
              onMouseEnter={e => onHoverTransition(e, 'add')}
              onMouseLeave={e => onHoverTransition(e, 'remove')}
              onClick={e =>
                currentIndex === idx ? null : onClickSlide(e, idx)
              }
              className={cn(s.slide, 'clients-slide')}
            >
              <img
                className={s.slide__icon}
                src={slide.img}
                alt={slide.company}
              />
              <div className={cn('container', s.slide__content)}>
                <p className={s.slide__text}>{slide.text}</p>
                <div className={s.slide__information}>
                  <div className={s.slide__author}>
                    <div className={s.slide__author_avatar}>
                      <img src={slide.avatar} alt={slide.name} />
                    </div>
                    <div className={s.slide__author_info}>
                      <div className={s.slide__author_name}>{slide.name}</div>
                      <div className={s.slide__author_position}>
                        {slide.position}
                      </div>
                      <div className={s.slide__author_company}>
                        {slide.company}
                      </div>
                    </div>
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
