import {
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Bold,
  ChevronDown,
  ChevronsUpDown,
  Clipboard,
  Code,
  CodeXml,
  Columns2,
  Columns3,
  Columns4,
  Copy,
  Eraser,
  Frame,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  ImageUp,
  IndentDecrease,
  IndentIncrease,
  Italic,
  Link,
  List,
  ListOrdered,
  ListTodo,
  LoaderCircle,
  Maximize,
  Minimize,
  Minus,
  PaintRoller,
  PanelLeft,
  PanelRight,
  Pencil,
  Plus,
  Quote,
  Redo2,
  Replace,
  SmilePlus,
  Sparkles,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellsMerge,
  TableCellsSplit,
  Trash,
  Trash2,
  Type,
  Underline,
  Undo2,
  Unlink,
  Video,
} from 'lucide-react'
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons'
import { SizeS } from '@/components/icons/SizeS'
import { SizeM } from '@/components/icons/SizeM'
import { SizeL } from '@/components/icons/SizeL'
import { AspectRatio } from '@/components/icons/AspectRatio'
import { FormatLineHeight } from '@/components/icons/LineHeight'
import { FileWordOutline } from '@/components/icons/FileWordOutline'
import { MenuDown } from '@/components/icons/MenuDown'
import { BlockquoteLeft } from '@/components/icons/Blockquote'
import DeleteColumn from '@/components/icons/DeleteColumn'
import DeleteRow from '@/components/icons/DeleteRow'

export const icons = {
  Bold,
  LoaderCircle,
  Italic,
  Underline,
  Quote,
  TextQuote: BlockquoteLeft,
  Strikethrough,
  Minus,
  Eraser,
  PaintRoller,
  Redo2,
  Undo2,
  AlignCenter: TextAlignCenterIcon,
  AlignJustify: TextAlignJustifyIcon,
  AlignLeft: TextAlignLeftIcon,
  AlignRight: TextAlignRightIcon,
  ChevronDown,
  Subscript,
  Superscript,
  Code,
  Code2: CodeXml,
  Type,
  IndentIncrease,
  IndentDecrease,
  List,
  ListOrdered,
  ListTodo,
  Link,
  ImageUp,
  Video,
  Maximize,
  Minimize,
  Table,
  Sparkles,
  Pencil,
  Unlink,
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalStart,
  BetweenVerticalEnd,
  TableCellsMerge,
  TableCellsSplit,
  Trash2,
  Trash,
  Replace,
  ChevronsUpDown,
  LineHeight: FormatLineHeight,
  Word: FileWordOutline,
  Heading1,
  Heading2,
  Heading3,
  Columns2,
  Columns3,
  Columns4,
  Plus,
  Grip: GripVertical,
  Copy,
  Clipboard,
  PanelLeft,
  PanelRight,
  Columns: Columns2,
  Iframe: Frame,

  MenuDown,
  SizeS,
  SizeM,
  SizeL,
  AspectRatio,

  Emoji: SmilePlus,

  DeleteColumn,
  DeleteRow,
} as any

export default icons
