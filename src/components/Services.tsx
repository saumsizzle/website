import { Button, Fade, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ServiceListItem from "./ServiceListItem";
import MDXComponent from "./MDXComponent";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SchoolIcon from '@mui/icons-material/School';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import TranslateIcon from '@mui/icons-material/Translate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Services() {
    return (
        <>
            <Accordion className="w-full">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Growing revenue
                </AccordionSummary>
                <AccordionDetails>
                    <ServiceListItem name="Curating global chain data for location ads" icon={<ShareLocationIcon />}>
                        <MDXComponent importedModule={import("./experience/maps-revenue.mdx")} />
                    </ServiceListItem>
                    <ServiceListItem name="Increasing operational efficiency for order management" icon={<ShoppingCartCheckoutIcon />}>
                        <MDXComponent importedModule={import("./experience/tailor.mdx")} />
                    </ServiceListItem>
                </AccordionDetails>
            </Accordion>
            <Accordion className="w-full">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Growing users
                </AccordionSummary>
                <AccordionDetails>
                    <ServiceListItem name="Transliterating the map for Indian users" icon={<TranslateIcon />}>
                        <MDXComponent importedModule={import("./experience/maps-transliteration.mdx")} />
                    </ServiceListItem>
                    <ServiceListItem name="Spearheading ClassDojo's India growth strategy" icon={<TrendingUpIcon />}>
                        <MDXComponent importedModule={import("./experience/amazon.mdx")} />
                    </ServiceListItem>
                    <ServiceListItem name="Growing sign-ups for Kindle Unlimited by 30%" icon={<AutoStoriesIcon />}>
                        <MDXComponent importedModule={import("./experience/amazon.mdx")} />
                    </ServiceListItem>
                </AccordionDetails>
            </Accordion>
            <Accordion className="w-full">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Retaining users
                </AccordionSummary>
                <AccordionDetails>
                    <ServiceListItem name="Retaining medium-large school districts on Google Classroom" icon={<SchoolIcon />}>
                        <MDXComponent importedModule={import("./experience/classroom.mdx")} />
                    </ServiceListItem>
                    <ServiceListItem name="Re-engaging Maps users after COVID" icon={<NotificationsActiveIcon />}>
                        <MDXComponent importedModule={import("./experience/maps-reengage.mdx")} />
                    </ServiceListItem>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
