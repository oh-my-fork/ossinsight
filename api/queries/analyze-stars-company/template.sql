with star_companies as (
    select
        trim(replace(replace(replace(replace(replace(replace(replace(replace(u.company, ',', ''), '-', ''), '@', ''), '.', ''), 'ltd', ''), 'inc', ''), 'com', ''), 'www', '')) as company_name,
        count(distinct actor_login) as stargazers
    from github_events
    left join users u ON github_events.actor_login = u.login
    where repo_id in (41986369) and github_events.type = 'WatchEvent'
    group by 1
)
select
    *,
    stargazers / (
        select count(*)
        from star_companies
        where length(company_name) != 0 and company_name not in ('-', 'none', 'no', 'home', 'n/a', 'null', 'unknown')
    ) as proportion
from star_companies sub
where length(company_name) != 0 and company_name not in ('-', 'none', 'no', 'home', 'n/a', 'null', 'unknown')
order by stargazers desc
limit 9999999999;
