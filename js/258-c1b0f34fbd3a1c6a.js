"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[258], {
    4137: function(t, e, i) {
        i.r(e);
        var n = i(7437)
          , r = i(2265);
        i(7138);
        var s = i(3037)
          , a = i(4238)
          , l = i(2804)
          , o = i(9216)
          , c = i(2960);
        let d = [{
            label: "Smart Utilities",
            path: "/solutions/smart-utilities"
        }, {
            label: "Track and Trace",
            path: "/solutions/track-and-trace"
        }, {
            label: "Smart Manufacture",
            path: "/solutions/smart-manufacture"
        }, {
            label: "Smart Poultry & Farming",
            path: "/solutions/smart-poultry"
        }, {
            label: "Antares Education",
            path: "/solutions/antares-education"
        }, {
            label: "Antares Eazy",
            path: "https://eazy.co.id"
        }]
          , x = [{
            label: "Antares Workshop",
            path: "/coming-soon"
        }, {
            label: "Device Design & Prototyping",
            path: "/coming-soon"
        }]
          , u = [{
            label: "Connectivity",
            path: "/product/connectivity"
        }, {
            label: "Platform",
            path: "/product/platform"
        }]
          , h = [{
            label: "Privacy Policy",
            path: "/legal/privacy-policy"
        }, {
            label: "Terms & Conditions",
            path: "/legal/terms-and-conditions"
        }]
          , p = t => {
            let {label: e, path: i} = t;
            return (0,
            n.jsx)("a", {
                href: i,
                children: (0,
                n.jsx)("span", {
                    className: "mb-1 block !text-sm !leading-7 text-tertiary-400 no-underline hover:underline",
                    children: e
                })
            })
        }
          , m = t => {
            let {title: e, items: i} = t
              , [s,d] = (0,
            r.useState)(!1)
              , {breakpoints: x} = (0,
            c.Z)()
              , u = (0,
            l.Z)(x.up("md"), {
                noSsr: !0
            });
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)(a.Ir, {
                    title: e,
                    onClick: () => {
                        d(!s)
                    }
                }), (0,
                n.jsx)(o.Z, {
                    in: s || u,
                    children: (0,
                    n.jsx)("div", {
                        children: i.map( (t, e) => {
                            let {label: i, path: r} = t;
                            return (0,
                            n.jsx)(p, {
                                label: i,
                                path: r
                            }, e + r)
                        }
                        )
                    })
                })]
            })
        }
        ;
        e.default = () => (0,
        n.jsxs)(s.ZP, {
            container: !0,
            spacing: 2,
            children: [(0,
            n.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                md: 4,
                children: (0,
                n.jsx)(m, {
                    title: "Solutions",
                    items: d
                })
            }), (0,
            n.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                md: 4,
                children: (0,
                n.jsxs)(s.ZP, {
                    container: !0,
                    columns: 1,
                    gap: 3,
                    children: [(0,
                    n.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0,
                        n.jsx)(m, {
                            title: "Services",
                            items: x
                        })
                    }), (0,
                    n.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0,
                        n.jsx)(m, {
                            title: "Products",
                            items: u
                        })
                    })]
                })
            }), (0,
            n.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                md: 4,
                children: (0,
                n.jsx)(s.ZP, {
                    container: !0,
                    columns: 1,
                    gap: 3,
                    children: (0,
                    n.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        md: 4,
                        children: (0,
                        n.jsx)(m, {
                            title: "Legal",
                            items: h
                        })
                    })
                })
            })]
        })
    },
    4238: function(t, e, i) {
        i.d(e, {
            $_: function() {
                return g
            },
            Ir: function() {
                return j
            }
        });
        var n = i(7437);
        i(2265);
        var r = i(7999)
          , s = i(3037)
          , a = i(4587)
          , l = i(3719)
          , o = i(4137)
          , c = i(4114)
          , d = i(8348)
          , x = i(164);
        let u = [{
            name: "YouTube",
            link: "https://www.youtube.com/channel/UCiy8xJo11Ld2dg3sbZBPPQA",
            icon: (0,
            n.jsx)(d.default, {})
        }, {
            name: "Instagram",
            link: "https://www.instagram.com/antares.iot",
            icon: (0,
            n.jsx)(x.default, {})
        }, {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send/?phone=628111202318&text&type=phone_number&app_absent=0",
            icon: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "25",
                height: "24",
                viewBox: "0 0 25 24",
                fill: "none",
                children: (0,
                n.jsx)("path", {
                    d: "M12.4854 0.504883C6.25076 0.504883 1.19485 5.52395 1.19485 11.7125C1.19485 13.8273 1.78909 15.8057 2.81197 17.5015L0.785706 23.5049L7.03983 21.5167C8.65695 22.4036 10.5176 22.9104 12.4952 22.9104C18.7298 22.9104 23.7857 17.8913 23.7857 11.7028C23.776 5.52395 18.7201 0.504883 12.4854 0.504883ZM18.0966 15.9617C17.8336 16.6244 16.6256 17.2189 16.0996 17.2481C15.5735 17.2773 15.554 17.6574 12.6705 16.41C9.78698 15.1528 8.05296 12.1023 7.91658 11.9074C7.7802 11.7125 6.79629 10.3091 6.85474 8.90573C6.91319 7.50234 7.68278 6.82988 7.95555 6.557C8.22831 6.28412 8.54005 6.23539 8.73488 6.22565C8.95894 6.22565 9.1148 6.2159 9.28041 6.22565C9.44602 6.23539 9.6993 6.18666 9.92336 6.77141C10.1377 7.35615 10.6637 8.77904 10.7319 8.92522C10.8001 9.07141 10.8391 9.23709 10.7319 9.432C10.6248 9.61717 10.576 9.73412 10.4299 9.8998C10.2838 10.0655 10.1084 10.2604 9.98181 10.3871C9.83568 10.5235 9.67008 10.6697 9.83568 10.9621C9.99155 11.2545 10.5371 12.2095 11.3651 12.999C12.427 14.0125 13.3427 14.3536 13.6252 14.4998C13.9077 14.6557 14.0733 14.6362 14.2486 14.4511C14.424 14.2659 14.9988 13.6422 15.2033 13.3595C15.4079 13.0769 15.593 13.1354 15.856 13.2426C16.119 13.3498 17.5024 14.0905 17.7849 14.2464C18.0674 14.4023 18.2525 14.4803 18.3206 14.5973C18.3888 14.7337 18.3694 15.3087 18.0966 15.9617Z",
                    fill: "white"
                })
            })
        }]
          , h = t => {
            let {item: e} = t;
            return (0,
            n.jsx)(r.Z, {
                component: "li",
                sx: {
                    display: "inline-block",
                    color: "primary.contrastText"
                },
                children: (0,
                n.jsx)(c.Z, {
                    target: "_blank",
                    sx: {
                        lineHeight: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 36,
                        height: 36,
                        lg: {
                            width: 40,
                            height: 40
                        },
                        borderRadius: "var(--12px, 12px)",
                        color: "text.secondary",
                        backgroundColor: "primary.main",
                        "&:hover": {
                            backgroundColor: "primary.dark"
                        },
                        "& img": {
                            fill: "currentColor",
                            width: 22,
                            height: "auto"
                        },
                        "& svg": {
                            width: 20,
                            height: "auto"
                        }
                    },
                    href: e.link,
                    children: e.icon
                })
            })
        }
        ;
        var p = () => (0,
        n.jsx)(r.Z, {
            sx: {
                lg: {
                    ml: -1
                }
            },
            children: (0,
            n.jsx)(r.Z, {
                component: "ul",
                sx: {
                    m: 0,
                    p: 0,
                    lineHeight: 0,
                    borderRadius: 3,
                    listStyle: "none",
                    display: "flex",
                    gap: "16px"
                },
                children: u.map(t => (0,
                n.jsx)(h, {
                    item: t
                }, t.name))
            })
        })
          , m = i(1589);
        i(7138);
        var g = () => (0,
        n.jsx)(r.Z, {
            component: "footer",
            "data-testid": "footer",
            sx: {
                py: {
                    xs: 4,
                    lg: 6
                },
                background: "linear-gradient(0deg, #FFE6DA 0%, rgba(254, 240, 233, 0) 82.16%)"
            },
            children: (0,
            n.jsxs)(a.Z, {
                maxWidth: "xl",
                sx: {
                    color: "primary.contrastText"
                },
                children: [(0,
                n.jsxs)(s.ZP, {
                    container: !0,
                    spacing: 1,
                    children: [(0,
                    n.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 5,
                        children: (0,
                        n.jsxs)(r.Z, {
                            sx: {
                                width: {
                                    xs: "100%",
                                    lg: 360
                                },
                                mb: {
                                    xs: 5
                                }
                            },
                            children: [(0,
                            n.jsx)(m.T, {
                                size: "sm"
                            }), (0,
                            n.jsx)(l.Z, {
                                variant: "subtitle1",
                                sx: {
                                    mb: 2,
                                    mt: 1,
                                    fontWeight: 500,
                                    color: "tertiary.light"
                                },
                                children: "ANTARES is an Internet of Things (IoT) trademark under PT Telkom Indonesia Tbk. ANTARES has two core pillars, the IoT platform, and IoT connectivity. It is an honor for us to be in a position to serve you throughout the world."
                            }), (0,
                            n.jsx)(p, {})]
                        })
                    }), (0,
                    n.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        lg: 7,
                        children: (0,
                        n.jsx)(o.default, {})
                    })]
                }), (0,
                n.jsx)(l.Z, {
                    component: "h6",
                    "data-testid": "copyright",
                    variant: "subtitle1",
                    sx: {
                        fontWeight: 600,
                        color: "text.primary",
                        mt: 5
                    },
                    children: "Copyright \xa9 2024 - Antares. All rights reserved."
                })]
            })
        })
          , f = i(8488)
          , j = t => {
            let {title: e, onClick: i= () => {}
            } = t;
            return (0,
            n.jsxs)(r.Z, {
                onClick: i,
                sx: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: 2,
                    cursor: {
                        xs: "pointer",
                        lg: "inherit"
                    },
                    width: {
                        xs: "100%"
                    }
                },
                children: [(0,
                n.jsx)(l.Z, {
                    component: "p",
                    variant: "subtitle1",
                    sx: {
                        color: "text.primary",
                        fontWeight: "600"
                    },
                    children: e
                }), (0,
                n.jsx)(r.Z, {
                    sx: {
                        display: {
                            md: "none",
                            xs: "block"
                        }
                    },
                    children: (0,
                    n.jsx)(f.default, {
                        className: "text-tertiary-500"
                    })
                })]
            })
        }
    },
    1695: function(t, e, i) {
        i.d(e, {
            default: function() {
                return C
            }
        });
        var n = i(7437)
          , r = i(2265)
          , s = i(7999)
          , a = i(4587)
          , l = i(335)
          , o = i(1589);
        i(3293);
        let c = [{
            label: "Home",
            path: "/"
        }, {
            label: "Products",
            cols: "grid-cols-1 w-max",
            subpath: [{
                label: "Connectivity",
                img: "/illustrations/connectivity.png",
                desc: "Provide a broad range of connectivity options",
                href: "/product/connectivity"
            }, {
                label: "Platform",
                img: "/illustrations/platform.png",
                desc: "Integrate, Manage, Monitor IoT Ecosystem",
                href: "/product/platform"
            }]
        }, {
            label: "Solutions",
            cols: "lg:grid-cols-2 w-[740px] xl:w-max",
            subpath: [{
                label: "Smart Utilities",
                img: "/illustrations/navigation/utility.png",
                desc: "Tailored Solutions, Seamless IoT Management",
                href: "/solutions/smart-utilities"
            }, {
                label: "Antares Eazy",
                img: "/illustrations/navigation/eazy.png",
                desc: "One App, Many Devices, Intelligent Home",
                href: "https://eazy.co.id"
            }, {
                label: "Smart Manufacture",
                img: "/illustrations/navigation/manufacture.png",
                desc: "Detect Malfunctions, Real-Time Updates, Solutions",
                href: "/solutions/smart-manufacture"
            }, {
                label: "Smart Poultry & Farming",
                img: "/illustrations/navigation/poultry.png",
                desc: "Optimize Livestock Yields, Increase Profits",
                href: "/solutions/smart-poultry"
            }, {
                label: "Track & Trace",
                img: "/illustrations/navigation/track_trace.png",
                desc: "Distribute, Track, Control, Manage Remotely",
                href: "/solutions/track-and-trace"
            }, {
                label: "Antares Education",
                img: "/illustrations/navigation/edu.png",
                desc: "Learn IoT from Experts, Expand Digital Ecosystem",
                href: "/solutions/antares-education"
            }]
        }, {
            label: "Documentations",
            path: "https://docs.antares.id"
        }];
        var d = i(8488)
          , x = i(6648);
        i(7138);
        var u = i(6463)
          , h = () => {
            let[t,e] = (0,
            r.useState)(null)
              , i = (0,
            r.useRef)(null)
              , a = (0,
            u.usePathname)()
              , l = i => {
                let {destination: r, label: s, subpath: a, cols: l} = i;
                return a ? (0,
                n.jsxs)("span", {
                    tabIndex: 0,
                    onMouseEnter: () => e(s),
                    className: "pointer-events-auto  flex cursor-pointer items-center justify-start gap-1 ".concat(t === s && "text-primary"),
                    children: [s, a && (0,
                    n.jsx)(d.default, {
                        className: "ml-1.5 block text-inherit transition delay-150 duration-300 ease-in-out group-hover:rotate-180 lg:hidden"
                    })]
                }) : (0,
                n.jsx)("a", {
                    href: r,
                    tabIndex: 0,
                    prefetch: !1,
                    className: "flex  cursor-pointer items-center justify-start gap-1 ".concat(t === s && "text-primary"),
                    children: s
                })
            }
            ;
            return (0,
            n.jsx)(s.Z, {
                sx: {
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    }
                },
                children: c.map(o => {
                    let {path: c, label: d, subpath: u, cols: h} = o;
                    return (0,
                    n.jsxs)(s.Z, {
                        className: "group",
                        sx: {
                            position: "relative",
                            color: "text.primary",
                            cursor: "pointer",
                            fontWeight: 500,
                            display: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            px: {
                                xs: 0,
                                md: 2,
                                lg: 1.5,
                                xl: 2
                            },
                            mb: {
                                xs: 4,
                                lg: 0
                            },
                            fontSize: {
                                xs: "1.75rem",
                                lg: "1rem"
                            },
                            transition: "color 0.3s",
                            ...c === a && {
                                color: "primary.main"
                            },
                            "&:hover": {
                                color: "primary.main"
                            }
                        },
                        children: [(0,
                        r.createElement)(l, {
                            destination: c,
                            label: d,
                            subpath: u,
                            cols: h,
                            key: d
                        }), u && t === d && (0,
                        n.jsx)("div", {
                            ref: i,
                            onMouseLeave: () => e(null),
                            onClick: () => e(null),
                            className: "grid grid-cols-1 lg:absolute ".concat(h, " left-[-100%] top-[150%] z-50 mt-2 gap-4 space-y-2  whitespace-nowrap rounded-xl py-2 text-lg text-tertiary-400 transition-all duration-300 ease-in-out lg:border lg:border-tertiary-50 lg:bg-white lg:p-4 lg:text-base lg:text-tertiary-500 lg:shadow-lg xl:-left-40"),
                            children: u.map(t => (0,
                            n.jsxs)("a", {
                                href: t.href,
                                prefetch: !1,
                                className: "inline-flex items-center gap-4 bg-white transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-tertiary-50 hover:text-tertiary-700 lg:w-min lg:py-1.5 xl:w-full xl:px-4",
                                children: [(0,
                                n.jsx)(x.default, {
                                    className: "hidden lg:block",
                                    src: t.img,
                                    width: 56,
                                    height: 56,
                                    alt: t.desc
                                }), (0,
                                n.jsxs)("div", {
                                    className: "flex flex-col gap-1 lg:w-3/4 xl:w-full",
                                    children: [(0,
                                    n.jsx)("h6", {
                                        className: "ml-4 font-semibold text-black lg:ml-0",
                                        children: t.label
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "hidden lg:flex",
                                        children: (0,
                                        n.jsx)("span", {
                                            className: "truncate text-sm text-tertiary-400 ",
                                            children: t.desc
                                        })
                                    })]
                                })]
                            }, t.label))
                        })]
                    }, d)
                }
                )
            })
        }
          , p = i(5519)
          , m = i(9039);
        async function g(t) {
            try {
                let e = await fetch(t, {
                    credentials: "include"
                });
                if (!e.ok) {
                    let t = Error(e.statusText || "Network response was not ok");
                    throw t.response = e,
                    t
                }
                return await e.json()
            } catch (t) {
                throw t
            }
        }
        i(3393);
        var f = i(733)
          , j = i(6191)
          , y = i(9790)
          , b = i(5356)
          , v = i(6917)
          , w = t => {
            let {name: e=""} = t
              , [i,s] = (0,
            r.useState)(null)
              , a = !!i;
            return (0,
            n.jsxs)("div", {
                children: [" ", (0,
                n.jsx)(p.Z, {
                    id: "dropdown-button",
                    "aria-controls": a ? "user-menu" : void 0,
                    "aria-haspopup": "true",
                    "aria-expanded": a ? "true" : void 0,
                    onClick: t => {
                        s(t.currentTarget)
                    }
                    ,
                    variant: "outlined",
                    children: e
                }), (0,
                n.jsxs)(y.Z, {
                    id: "user-menu",
                    anchorEl: i,
                    open: a,
                    onClose: () => {
                        s(null)
                    }
                    ,
                    MenuListProps: {
                        "aria-labelledby": "dropdown-button"
                    },
                    sx: {
                        top: "5px !important",
                        "& .MuiPaper-root": {
                            borderRadius: ".75rem"
                        }
                    },
                    children: [(0,
                    n.jsxs)(b.Z, {
                        children: [(0,
                        n.jsx)(v.Z, {
                            children: (0,
                            n.jsx)(f.Z, {
                                className: "!text-tertiary-500 "
                            })
                        }), (0,
                        n.jsx)("a", {
                            prefetch: !1,
                            href: "https://console.antares.id/overview",
                            className: "!text-tertiary-600",
                            children: "Dashboard"
                        })]
                    }), (0,
                    n.jsxs)(b.Z, {
                        children: [(0,
                        n.jsx)(v.Z, {
                            children: (0,
                            n.jsx)(j.Z, {
                                className: "!text-tertiary-500"
                            })
                        }), (0,
                        n.jsx)("a", {
                            prefetch: !1,
                            href: "".concat("https://console.antares.id", "/signout?callbackUrl=").concat("https://antares.id/"),
                            className: "!text-tertiary-600",
                            children: "Log Out"
                        }), " "]
                    })]
                })]
            })
        }
          , Z = () => {
            let {isLoading: t, data: e, isLogin: i, isError: r} = function() {
                var t, e;
                let {data: i, error: n, isLoading: r} = (0,
                m.ZP)("".concat("https://console.antares.id", "/api/auth/checkLogin"), g);
                return {
                    isLoading: r,
                    data: null !== (t = null == i ? void 0 : i.user) && void 0 !== t ? t : {},
                    isLogin: null !== (e = null == i ? void 0 : i.login) && void 0 !== e && e,
                    isError: n
                }
            }();
            return (0,
            n.jsx)(s.Z, {
                sx: {
                    "> button": {
                        mr: 2
                    },
                    gap: 1,
                    display: "flex",
                    marginLeft: {
                        xs: "2rem",
                        md: "3rem",
                        lg: "0px"
                    },
                    flexDirection: {
                        xs: "row",
                        lg: "column",
                        xl: "row"
                    }
                },
                children: t ? null : i ? (0,
                n.jsx)(w, {
                    name: null == e ? void 0 : e.name
                }) : (0,
                n.jsx)(p.Z, {
                    variant: "outlined",
                    href: "".concat("https://console.antares.id", "/"),
                    children: "Sign In"
                })
            })
        }
          , C = () => {
            let[t,e] = (0,
            r.useState)(!1);
            return (0,
            n.jsx)(s.Z, {
                "data-testid": "header",
                sx: {
                    position: "sticky",
                    top: 0,
                    background: "white",
                    zIndex: 50
                },
                children: (0,
                n.jsx)(a.Z, {
                    sx: {
                        py: {
                            xs: 2,
                            md: 1
                        }
                    },
                    maxWidth: "xl",
                    children: (0,
                    n.jsxs)(s.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "background.paper"
                        },
                        children: [(0,
                        n.jsx)(o.T, {}), (0,
                        n.jsx)(s.Z, {
                            sx: {
                                ml: "auto",
                                display: {
                                    xs: "inline-flex",
                                    lg: "none"
                                }
                            },
                            children: (0,
                            n.jsx)(l.Z, {
                                "data-testid": "menu-button",
                                onClick: () => e(!t),
                                children: (0,
                                n.jsx)(x.default, {
                                    src: t ? "/icons/burger_close.svg" : "/icons/burger_menu.svg",
                                    width: 40,
                                    height: 40,
                                    alt: ""
                                })
                            })
                        }), (0,
                        n.jsxs)(s.Z, {
                            sx: {
                                width: "100%",
                                display: "flex",
                                justifyContent: {
                                    lg: "space-between"
                                },
                                flexDirection: {
                                    xs: "column",
                                    lg: "row"
                                },
                                alignItems: {
                                    xs: "start",
                                    md: "start",
                                    lg: "center"
                                },
                                transition: t => t.transitions.create(["top"]),
                                py: {
                                    xs: 6,
                                    lg: 2
                                },
                                backgroundColor: "background.paper",
                                zIndex: {
                                    xs: "appBar",
                                    lg: "1"
                                },
                                position: {
                                    xs: "fixed",
                                    lg: "initial"
                                },
                                height: {
                                    xs: "85vh",
                                    lg: "auto"
                                },
                                top: t ? "95px" : "-120vh",
                                left: 0
                            },
                            children: [(0,
                            n.jsxs)(s.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "2rem"
                                },
                                children: [(0,
                                n.jsx)(s.Z, {
                                    sx: {
                                        width: {
                                            lg: 3,
                                            xl: 5
                                        }
                                    }
                                }), " ", (0,
                                n.jsx)(h, {})]
                            }), (0,
                            n.jsx)(Z, {})]
                        })]
                    })
                })
            })
        }
    },
    1589: function(t, e, i) {
        i.d(e, {
            T: function() {
                return a
            }
        });
        var n = i(7437);
        i(2265);
        var r = i(7999)
          , s = i(6648)
          , a = t => {
            let {onClick: e, variant: i="primary", size: a="md"} = t;
            return (0,
            n.jsx)(r.Z, {
                onClick: e,
                sx: {
                    ..."md" === a && {
                        height: "63px",
                        width: "155px"
                    },
                    ..."sm" === a && {
                        height: "48px",
                        width: "120px"
                    },
                    position: "relative"
                },
                children: (0,
                n.jsx)(s.default, {
                    src: "/logo_antares.svg",
                    fill: !0,
                    alt: ""
                })
            })
        }
    }
}]);
