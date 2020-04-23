CREATE PROCEDURE get_stats
AS

SELECT
	SUM(SmallBiz) as 'TotalSmallBiz',
    SUM(NonProfit) as 'TotalNonProfit',
    COUNT(*) as 'TotalPledges'
FROM dbo.Pledge

GO;