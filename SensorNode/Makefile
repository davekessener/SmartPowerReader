# Default Makefile, for host native GNRC-based networking

# name of your application
# spr = Smart Power Reader
APPLICATION = spr_node

# If no BOARD is found in the environment, use this default:
BOARD ?= native

# This has to be the absolute path to the RIOT base directory:
RIOTBASE ?= $(CURDIR)/RIOT

BOARD_INSUFFICIENT_MEMORY := arduino-duemilanove arduino-mega2560 arduino-uno \
                             chronos mega-xplained msb-430 msb-430h \
                             nucleo-f031k6 nucleo-f042k6 nucleo-l031k6 \
                             nucleo-f030r8 nucleo-f303k8 nucleo-f334r8 \
                             nucleo-l053r8 stm32f0discovery telosb \
                             waspmote-pro wsn430-v1_3b wsn430-v1_4 z1

## Uncomment to redefine port, for example use 61616 for RFC 6282 UDP compression.
#GCOAP_PORT = 5683
#CFLAGS += -DGCOAP_PORT=$(GCOAP_PORT)

## Uncomment to redefine request token length, max 8.
#GCOAP_TOKENLEN = 2
#CFLAGS += -DGCOAP_TOKENLEN=$(GCOAP_TOKENLEN)

# Change default channel to avoid interference from other group
DEFAULT_CHANNEL ?= 15
CFLAGS += -DIEEE802154_DEFAULT_CHANNEL=$(DEFAULT_CHANNEL)

# Used peripheral
FEATURES_REQUIRED += periph_adc
FEATURES_REQUIRED += periph_gpio

# Rene: This is for my board, because i do not have this :-)
#ifneq (,$(filter nucleo-f446re,$(BOARD)))
		# For random hwgenerator
FEATURES_REQUIRED += periph_hwrng
USEMODULE += random
#endif

# Used pkg
USEPKG += tinycbor

# Include packages that pull up and auto-init the link layer.
# NOTE: 6LoWPAN will be included if IEEE802.15.4 devices are present
USEMODULE += gnrc_netdev_default
USEMODULE += auto_init_gnrc_netif
# Specify the mandatory networking modules
USEMODULE += gnrc_ipv6_default
USEMODULE += gcoap
# RPL module for multi-hop networking
USEMODULE += gnrc_rpl
USEMODULE += auto_init_gnrc_rpl
# Additional networking modules that can be dropped if not needed
USEMODULE += gnrc_icmpv6_echo

# Required by gcoap example
USEMODULE += od
USEMODULE += fmt
# Add also the shell, some shell commands
USEMODULE += shell
USEMODULE += shell_commands
USEMODULE += ps
# Use SAUL to access LED
USEMODULE += saul_default
USEMODULE += xtimer
# Used for buttons with isr's
USEMODULE += periph_gpio_irq
# Workaround for link-local not found
USEMODULE += netstats_l2
USEMODULE += netstats_ipv6
USEMODULE += netstats_rpl

# Uncomment this to join RPL DODAGs even if DIOs do not contain
# DODAG Configuration Options (see the doc for more info)
CFLAGS += -DGNRC_RPL_DODAG_CONF_OPTIONAL_ON_JOIN

# Comment this out to disable code in RIOT that does safety checking
# which is not needed in a production environment but helps in the
# development process:
DEVELHELP ?= 1

# Change this to 0 show compiler invocation lines by default:
QUIET ?= 1

include $(RIOTBASE)/Makefile.include
